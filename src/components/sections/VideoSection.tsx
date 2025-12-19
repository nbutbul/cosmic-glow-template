import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="w-full bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full aspect-video relative overflow-hidden"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* Professional photographer/videographer working with business content */}
          <source
            src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle overlay for visual integration with hero */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/30" />
      </motion.div>
    </section>
  );
};

export default VideoSection;
