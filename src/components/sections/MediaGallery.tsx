import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  aspectRatio: "square" | "portrait" | "landscape" | "wide";
}

const mediaItems: MediaItem[] = [
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    alt: "Professional photographer shooting content",
    aspectRatio: "landscape",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    alt: "Camera equipment setup",
    aspectRatio: "portrait",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "Professional photography studio",
    aspectRatio: "square",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2732_1440_25fps.mp4",
    alt: "Behind the scenes content creation",
    aspectRatio: "landscape",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    alt: "Product photography setup",
    aspectRatio: "portrait",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    alt: "Business content shoot",
    aspectRatio: "square",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/6774272/6774272-uhd_2732_1440_25fps.mp4",
    alt: "Social media content creation",
    aspectRatio: "wide",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    alt: "Professional lighting setup",
    aspectRatio: "landscape",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    alt: "Creative photography session",
    aspectRatio: "portrait",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80",
    alt: "Studio environment",
    aspectRatio: "square",
  },
];

const MediaCard = ({ item, index }: { item: MediaItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered || isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, isInView]);

  const getAspectClass = () => {
    switch (item.aspectRatio) {
      case "portrait":
        return "row-span-2";
      case "wide":
        return "col-span-2";
      case "landscape":
        return "col-span-1";
      default:
        return "";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-lg bg-card ${getAspectClass()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
        {item.type === "video" ? (
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Video indicator */}
        {item.type === "video" && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-3 h-3 text-primary-foreground ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const MediaGallery = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
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
            צפו בעבודות שלנו ובתוצאות שאנחנו יוצרים ללקוחות
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
