import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
