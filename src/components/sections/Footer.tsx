import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Phone, href: "#", label: "Phone" }
  ];

  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#story" },
    { label: "About", href: "#process" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative py-16 px-4 md:px-8 overflow-hidden">
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
              <span className="text-primary">STUDIO</span>
              <span className="text-foreground">.PRO</span>
            </span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-8"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors underline-hover"
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
          <p>© 2024 Studio. All rights reserved. | Crafted with passion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
