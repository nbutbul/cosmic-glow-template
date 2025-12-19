import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Sparkles, Camera, Instagram } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Be Social",
    description: "תוכן שעוצר סקרול? זה בדיוק מה שאנחנו עושים. צילום תמונות וסרטונים שמושכים את העין, מדברים בשפה של הקהל, וממירים צפיות בלייקים, שיתופים ומכירות.",
    highlight: "Reels, TikToks & Stories"
  },
  {
    icon: Sparkles,
    title: "שיווק מוצר",
    description: "סיפור מותג או הצגת מוצר – אנחנו יוצרים ויזואליה שמושכת מבטים וגורמת לקהל להגיב, לשתף ולהתחבר",
    highlight: "Brand & Product Films"
  },
  {
    icon: Camera,
    title: "The Full Package",
    description: "מהפריים הראשון ועד הפרסום ברשתות – אנחנו מטפלים בהכל. אתם חולמים, אנחנו מגשימים.",
    highlight: "End-to-End Production"
  },
  {
    icon: Instagram,
    title: "ניהול רשתות",
    description: "כל סטורי, פוסט ומילה – בונים את המוניטין שלכם. בלי ידע שיווקי זה משחק בעיוור. תנו לנו את ההגה – אתם תראו לאן זה מוביל.",
    highlight: "Facebook, Instagram and more"
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" ref={ref} className="py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest">השירותים שלנו</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            What We <span className="gradient-text">Create</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="neon-border neon-border-hover rounded-2xl p-8 bg-card/30 backdrop-blur-sm group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-primary/70 text-xs uppercase tracking-wider">{service.highlight}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
