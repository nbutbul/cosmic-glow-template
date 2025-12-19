import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import MediaGallery from "@/components/sections/MediaGallery";
import StorySection from "@/components/sections/StorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Global Animated Background - Fixed behind all content */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground variant="footer" />
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MediaGallery />
        <StorySection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <ContactFormSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
