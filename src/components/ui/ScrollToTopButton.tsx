import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute bottom-6 right-6 p-2 rounded-full bg-primary/10 border border-primary/30 text-primary opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 z-10"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
