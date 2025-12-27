import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  pageUrl?: string;
  honeypot?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    
    // Rate limiting check
    const now = Date.now();
    const rateData = rateLimitMap.get(clientIP);
    
    if (rateData) {
      if (now > rateData.resetTime) {
        rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_WINDOW_MS });
      } else if (rateData.count >= RATE_LIMIT) {
        console.log(`Rate limit exceeded for IP: ${clientIP}`);
        return new Response(
          JSON.stringify({ error: "יותר מדי בקשות. נסה שוב מאוחר יותר." }),
          { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      } else {
        rateData.count++;
      }
    } else {
      rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_WINDOW_MS });
    }

    const body: ContactRequest = await req.json();
    const { name, email, phone, message, pageUrl, honeypot } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.log("Honeypot triggered - likely spam");
      // Return success to not alert the bot
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ error: "חסרים שדות חובה" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const timestamp = new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" });

    console.log(`Processing contact form submission from: ${email}`);

    const emailHtml = `
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; direction: rtl; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .footer { margin-top: 20px; font-size: 12px; color: #888; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">📬 הודעה חדשה מטופס יצירת קשר</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">שם מלא:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">אימייל:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">טלפון:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">הודעה:</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
            <div class="footer">
              <p>נשלח בתאריך: ${timestamp}</p>
              ${pageUrl ? `<p>מעמוד: ${pageUrl}</p>` : ''}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["butbul@gmail.com"],
      reply_to: email,
      subject: `הודעה חדשה מ-${name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: "שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
