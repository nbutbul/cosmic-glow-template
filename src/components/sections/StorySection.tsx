import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "We don't just create videos.",
    "We craft visual experiences",
    "that resonate with your audience",
    "and elevate your brand."
  ];

  return (
    <section ref={ref} className="py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="neon-border rounded-2xl p-8 md:p-16 bg-card/50 backdrop-blur-sm"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-primary text-sm uppercase tracking-widest mb-8 block"
          >
            What's Your Story?
          </motion.span>
          
          <div className="space-y-2">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`text-2xl md:text-4xl font-bold ${
                  index === 1 ? "gradient-text" : "text-foreground"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
