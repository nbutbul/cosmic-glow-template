import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollToNextSectionProps {
  targetId: string;
}

const ScrollToNextSection = ({ targetId }: ScrollToNextSectionProps) => {
  const scrollToNext = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer z-10"
      onClick={scrollToNext}
    >
      <ChevronDown className="w-8 h-8 text-primary" />
    </motion.div>
  );
};

export default ScrollToNextSection;
