import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { navLinks } from "./Header";

const Footer = () => {
  const socialLinks = [
    { icon: Phone, href: "tel:0502332327", label: "Phone", external: false },
    { icon: MessageCircle, href: "https://wa.me/972502332327", label: "WhatsApp", external: true },
    { icon: Facebook, href: "https://www.facebook.com/share/1DTFwPBEgT/?mibextid=wwXIfr", label: "Facebook", external: true },
    { icon: Instagram, href: "https://www.instagram.com/art33.co.il/", label: "Instagram", external: true },
    { icon: Mail, href: "mailto:nadav@art33.co.il", label: "Email", external: false }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="relative py-16 px-4 md:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatedBackground variant="footer" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-bold">
              <span className="text-primary">Art33</span>
              <span className="text-foreground">.co.il</span>
            </span>
          </motion.div>

          {/* Navigation Links - Same as Header */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            dir="rtl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-bold tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-background/30"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground"
        >
          <p>© 2025 Art33.co.il. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;