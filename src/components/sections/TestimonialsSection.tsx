import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team transformed our brand presence. The videos they created exceeded all expectations.",
    author: "Sarah Cohen",
    role: "Marketing Director",
    company: "TechStart IL"
  },
  {
    quote: "מקצועיות ברמה הגבוהה ביותר. הסרטונים שלהם הביאו לנו תוצאות מדהימות ברשתות החברתיות.",
    author: "דני לוי",
    role: "מנכ״ל",
    company: "Brand Masters"
  },
  {
    quote: "The attention to detail and creative vision is unmatched. They truly understand visual storytelling.",
    author: "Michael Ross",
    role: "Creative Lead",
    company: "Innovation Hub"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="testimonials" ref={ref} className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            מה הלקוחות <span className="gradient-text">אומרים</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                transform: isInView ? `translateY(${index * 10}px)` : undefined
              }}
              className="neon-border rounded-2xl p-8 bg-card/40 backdrop-blur-sm relative group"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--neon-pink) / 0.1), transparent 70%)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
