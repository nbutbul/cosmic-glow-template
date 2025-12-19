import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Sparkles, Camera, Film } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Be Social",
    description: "צריכים תוכן שיגרום לכולם לעצור ולהקשיב? אנחנו מייצרים סרטונים שמושכים את העין ומדברים בשפה של הרשתות.",
    highlight: "Reels, TikToks & Stories"
  },
  {
    icon: Sparkles,
    title: "Stunning Visuals",
    description: "Whether it's a brand story or a product showcase, we create visuals that capture attention and drive engagement.",
    highlight: "Brand & Product Films"
  },
  {
    icon: Camera,
    title: "The Full Package",
    description: "From concept to final cut, we handle everything. You dream it, we bring it to life with cinematic precision.",
    highlight: "End-to-End Production"
  },
  {
    icon: Film,
    title: "Success Stories",
    description: "Real results from real clients. Our work speaks for itself through increased engagement and brand recognition.",
    highlight: "Proven Track Record"
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
          <span className="text-primary text-sm uppercase tracking-widest">Our Services</span>
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
