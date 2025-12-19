import { motion, useReducedMotion, type Easing } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const easeOut: Easing = [0.16, 1, 0.3, 1];

  const getHeadlineAnimation = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0.3 : 0.8,
      delay: shouldReduceMotion ? 0.1 : delay,
      ease: easeOut,
    },
  });

  const getFloatingAnimation = (offset: number) => {
    if (shouldReduceMotion) return {};
    return {
      animate: {
        y: [0, -6, 0],
      },
      transition: {
        y: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1.8 + offset,
        },
      },
    };
  };

  const hoverEffect = shouldReduceMotion
    ? {}
    : {
        y: -2,
        filter: "brightness(1.1)",
        transition: { duration: 0.25, ease: easeOut },
      };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

      {/* Main content */}
      <div className="text-center z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl mb-6 tracking-widest uppercase"
          dir="rtl"
        >
          סטודיו <span className="text-primary">Art33</span>, מומחים לסושיאל
        </motion.p>
        
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 cursor-default"
        >
          <motion.span
            {...getHeadlineAnimation(0.8)}
            className="block"
          >
            <motion.span
              {...getFloatingAnimation(0)}
              whileHover={hoverEffect}
              className="block transition-[filter] duration-300"
            >
              Behind
            </motion.span>
          </motion.span>
          <motion.span
            {...getHeadlineAnimation(0.9)}
            className="block"
          >
            <motion.span
              {...getFloatingAnimation(0.3)}
              whileHover={hoverEffect}
              className="block gradient-text text-glow transition-[filter] duration-300"
            >
              The
            </motion.span>
          </motion.span>
          <motion.span
            {...getHeadlineAnimation(1.0)}
            className="block"
          >
            <motion.span
              {...getFloatingAnimation(0.6)}
              whileHover={hoverEffect}
              className="block transition-[filter] duration-300"
            >
              Lens
            </motion.span>
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
          dir="rtl"
        >
          אנחנו לא רק מצלמים, אנחנו יוצרים מציאות. הופכים את הרעיונות שלכם לחוויה קולנועית שתגרום לאנשים להפסיק לגלול ולהתחיל להתרגש.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary text-primary-foreground text-lg px-10 py-4 rounded-full glow-pulse hover:scale-105 transition-transform font-bold tracking-wide"
          >
            Start Your Story
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
