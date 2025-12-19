import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ScrollToNextSection from "@/components/ui/ScrollToNextSection";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta" ref={ref} className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm uppercase tracking-widest"
        >
          Ready to Begin?
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mt-4 mb-6"
        >
          Let's Create <span className="gradient-text text-glow">Magic</span> Together
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          נשמח לשמוע על הפרויקט שלכם ולהפוך את החזון שלכם למציאות
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection("#contact")}
            className="bg-primary text-primary-foreground text-lg px-10 py-4 rounded-full glow-pulse hover:scale-105 transition-transform font-bold tracking-wide inline-flex items-center gap-2 group"
          >
            בואו נדבר
            <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
          </button>
          
          <button 
            onClick={() => scrollToSection("#portfolio")}
            className="border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300"
          >
            הפורטפוליו שלנו
          </button>
        </motion.div>
      </div>
      <ScrollToTopButton />
      <ScrollToNextSection targetId="faq" />
    </section>
  );
};

export default CTASection;
