import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "כמה זמן לוקח להקים אתר?",
    answer:
      "משך הזמן תלוי בגודל הפרויקט ובמורכבות שלו. אתר תדמית פשוט יכול להיות מוכן תוך שבוע עד שבועיים, בעוד פרויקטים מורכבים יותר כמו חנויות אונליין או מערכות מותאמות אישית עשויים לקחת מספר שבועות עד חודשים.",
  },
  {
    question: "מה כולל תהליך העבודה?",
    answer:
      "תהליך העבודה שלנו כולל פגישת היכרות ואפיון, עיצוב ממשק משתמש, פיתוח האתר, בדיקות ואופטימיזציה, והעלאה לאוויר. לאורך כל התהליך אתם מעודכנים ומעורבים בכל שלב.",
  },
  {
    question: "האם אתם מספקים תחזוקה שוטפת?",
    answer:
      "בהחלט! אנחנו מציעים חבילות תחזוקה שוטפות הכוללות עדכוני תוכן, גיבויים, אבטחה, תמיכה טכנית ושיפורים מתמשכים. אנחנו כאן לוודא שהאתר שלכם תמיד פועל במיטבו.",
  },
  {
    question: "מה ההבדל בינכם לבין מתחרים אחרים?",
    answer:
      "אנחנו משלבים עיצוב יצירתי ברמה גבוהה עם פיתוח טכנולוגי מתקדם. הגישה שלנו היא אישית ומותאמת לכל לקוח, ואנחנו לא מסתפקים רק באתר יפה - אנחנו בונים כלי שיווקי שעובד עבורכם.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card/30" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">שאלות נפוצות</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            מצאו תשובות לשאלות הנפוצות ביותר על השירותים שלנו
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-5 text-foreground font-medium text-lg [&[data-state=open]>svg]:rotate-45">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-right">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
