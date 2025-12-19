import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

interface MediaCardProps {
  item: MediaItem;
  index: number;
  onClick: () => void;
}

const MediaCard = ({ item, index, onClick }: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative overflow-hidden rounded-lg border-2 border-primary bg-card cursor-pointer"
      style={{ gridRow: item.gridArea.split(" / ")[0], gridColumn: item.gridArea.split(" / ")[1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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

interface LightboxProps {
  images: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/80 hover:bg-card text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows - desktop */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="hidden md:flex absolute left-4 z-50 p-2 rounded-full bg-card/80 hover:bg-card text-foreground transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="hidden md:flex absolute right-4 z-50 p-2 rounded-full bg-card/80 hover:bg-card text-foreground transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        src={images[currentIndex].src.replace("w=800", "w=1600")}
        alt={images[currentIndex].alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/80 text-foreground text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
};

const MediaGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % mediaItems.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, []);

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
            <MediaCard 
              key={index} 
              item={item} 
              index={index} 
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={mediaItems}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaGallery;