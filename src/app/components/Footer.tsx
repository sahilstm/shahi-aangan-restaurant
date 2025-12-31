"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Our Menu", href: "#menu" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Our Menu",
      links: [
        { name: "Starters", href: "#menu" },
        { name: "Main Course", href: "#menu" },
        { name: "Biryani Special", href: "#menu" },
        { name: "Breads", href: "#menu" },
        { name: "Desserts", href: "#menu" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-mesh opacity-50" />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ultra-glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-400">
                  Get exclusive offers, new menu updates & foodie tips delivered
                  to your inbox!
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Subscribe 🎉
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <a href="#home" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full blur-lg opacity-50 group-hover:opacity-80"
                  />
                  <div className="relative p-3 ultra-glass rounded-xl">
                    <ChefHat className="text-primary w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gradient font-[family-name:var(--font-playfair)]">
                    शाही आगन
                  </h2>
                  <p className="text-xs text-gray-500 tracking-widest">
                    ROYAL DINING SINCE 2010
                  </p>
                </div>
              </a>
            </motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Experience the royal flavors of authentic Indian cuisine in the
              heart of Sitamarhi. Where tradition meets taste, and every meal
              becomes a celebration.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="https://maps.google.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span>Main Road, Sitamarhi, Bihar 843302</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@shaahiaagan.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>info@shaahiaagan.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 ultra-glass rounded-xl hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Shaahi Aagan Restaurant. All rights reserved.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
            >
              Made by
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              <a
                href="https://levelupsolution.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-primary hover:underline hover:text-primary-light transition-colors"
              >
                LevelUp Solution
              </a>
            </motion.p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Privacy <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Terms <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 ultra-glass rounded-full glow z-50"
      >
        <ArrowUp className="w-6 h-6 text-primary" />
      </motion.button>
    </footer>
  );
};

export default Footer;
