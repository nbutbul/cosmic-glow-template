import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background particles */}
      <div className="particle w-64 h-64 top-20 left-10 opacity-20" />
      <div className="particle w-96 h-96 bottom-20 right-10 opacity-15" style={{ animationDelay: '2s' }} />
      <div className="particle w-48 h-48 top-1/2 left-1/3 opacity-10" style={{ animationDelay: '4s' }} />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8"
      >
        <span className="text-2xl font-bold gradient-text">Studio</span>
      </motion.div>

      {/* Main content */}
      <div className="text-center z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl mb-6 tracking-widest uppercase"
        >
          Creative Visual Agency
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
        >
          <span className="block">Stunning</span>
          <span className="block gradient-text text-glow">Visual</span>
          <span className="block">Storytelling</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          We bring your vision to life through captivating visuals and cinematic experiences that leave lasting impressions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="bg-primary text-primary-foreground text-lg px-10 py-4 rounded-full glow-pulse hover:scale-105 transition-transform font-bold tracking-wide">
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
