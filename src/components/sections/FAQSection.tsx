import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "תוך כמה זמן אקבל את התוכן המוכן לפרסום?",
    answer:
      "אנחנו יודעים שהסושיאל זז מהר. לכן, אנחנו שמים דגש על תהליך עריכה מהיר. בדרך כלל, התוכן יהיה מוכן תוך 3 ימי עסקים מרגע יום הצילום",
  },
  {
    question: "לאילו פלטפורמות התוכן שאתם מייצרים מתאים?",
    answer:
      "לכל מקום שבו הקהל שלכם נמצא. אנחנו יוצרים תוכן שמותאם ספציפית לפורמטים של Instagram Reels, TikTok, YouTube Shorts וגם לפוסטים איכותיים בפיד. כל פריים מתוכנן מראש כדי למקסם את המעורבות והחשיפה בכל פלטפורמה.",
  },
  {
    question: "למה אני צריך צלם מקצועי אם אפשר לצלם הכל באייפון?",
    answer:
      "הסמארטפונים היום מדהימים, אבל ההבדל הוא לא רק במצלמה – הוא בעין המקצועית, בתאורה, בסאונד ובקריאייטיב. תוכן מקצועי בונה אמון, ואמון הוא מה שהופך צופים ללקוחות.",
  },
  {
    question: "מה אם יש לי סגנון ספציפי או מותג עם שפה מאוד מיוחדת?",
    answer:
      "זה בדיוק המגרש הביתי שלנו. לפני שאנחנו מוציאים את המצלמה מהתיק, אנחנו לומדים את ה-DNA של המותג שלכם. בין אם אתם מחפשים קו נקי ומינימליסטי או תוכן בועט, צבעוני ומהיר – אנחנו מתאימים את הקריאייטיב, את זוויות הצילום ואת קצב העריכה בדיוק לוייב שלכם.",
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary text-primary-foreground text-lg px-10 py-4 rounded-full glow-pulse hover:scale-105 transition-transform font-bold tracking-wide inline-flex items-center gap-2 group"
          >
            בואו נדבר
            <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
