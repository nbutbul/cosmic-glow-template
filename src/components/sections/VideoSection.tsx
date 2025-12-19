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
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional subtle overlay for visual integration */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </motion.div>
    </section>
  );
};

export default VideoSection;
