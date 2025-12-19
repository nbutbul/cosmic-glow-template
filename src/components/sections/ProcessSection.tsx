import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, goals, and vision to understand what makes you unique."
  },
  {
    number: "02",
    title: "Concept & Script",
    description: "Our creative team develops compelling concepts and scripts that tell your story."
  },
  {
    number: "03",
    title: "Production",
    description: "State-of-the-art equipment and experienced crew bring your vision to life."
  },
  {
    number: "04",
    title: "Post & Delivery",
    description: "Expert editing, color grading, and sound design for a polished final product."
  }
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-32 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            How The <span className="gradient-text">Magic</span> Happens
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number bubble */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold z-10 box-glow">
                {step.number.slice(-1)}
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <span className="text-primary/60 text-sm font-mono">{step.number}</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
