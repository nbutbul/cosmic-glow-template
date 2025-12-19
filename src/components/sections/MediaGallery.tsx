import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ScrollToNextSection from "@/components/ui/ScrollToNextSection";

interface MediaItem {
  src: string;
  alt: string;
  gridArea: string;
}

const mediaItems: MediaItem[] = [
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    alt: "Camera equipment setup",
    gridArea: "span 2 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "Professional photography studio",
    gridArea: "span 1 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    alt: "Product photography setup",
    gridArea: "span 1 / span 2",
  },
  {
    src: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    alt: "Business content shoot",
    gridArea: "span 1 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    alt: "Professional lighting setup",
    gridArea: "span 1 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    alt: "Creative photography session",
    gridArea: "span 2 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80",
    alt: "Studio environment",
    gridArea: "span 1 / span 1",
  },
  {
    src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=80",
    alt: "Professional camera work",
    gridArea: "span 1 / span 1",
  },
];

const MediaCard = ({ item, index }: { item: MediaItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative overflow-hidden rounded-lg border-2 border-primary bg-card"
      style={{ gridRow: item.gridArea.split(" / ")[0], gridColumn: item.gridArea.split(" / ")[1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full min-h-[180px] md:min-h-[220px]">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};

const MediaGallery = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
          dir="rtl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">הפורטפוליו</span> שלנו
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            טעימות קטנות מחוויות גדולות
          </p>
        </motion.div>

        {/* Organic Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="neon"
            size="lg"
            onClick={() => scrollToSection("#services")}
            className="text-lg px-8"
          >
            השירותים שלנו
          </Button>
        </motion.div>
      </div>
      <ScrollToTopButton />
      <ScrollToNextSection targetId="services" />
    </section>
  );
};

export default MediaGallery;