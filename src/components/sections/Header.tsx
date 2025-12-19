import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const navLinks = [
  { label: "בית", href: "#hero" },
  { label: "פורטפוליו", href: "#portfolio" },
  { label: "הסיפור שלנו", href: "#story" },
  { label: "שירותים", href: "#services" },
  { label: "תהליך", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צור קשר", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        dir="rtl"
      >
        {/* Solid Black Background - No animations */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-x-0 bottom-0 h-px bg-primary/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex-shrink-0">
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#hero");
                }}
                className="text-xl md:text-2xl font-bold text-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary">Art33</span>
                <span className="text-foreground">.co.il</span>
              </motion.a>
            </div>

            {/* Navigation Links - Center */}
            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 group whitespace-nowrap"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button - Right side */}
            <div className="hidden md:block flex-shrink-0">
              <Button
                variant="neon"
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="text-sm font-medium"
              >
                בואו נדבר
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Solid Black Backdrop */}
            <div className="absolute inset-0 bg-black" />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8 z-10"
              dir="rtl"
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-bold tracking-wide text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  variant="neon"
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                >
                  בואו נדבר
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
