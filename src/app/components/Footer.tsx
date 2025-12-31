"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": ["Home", "About", "Menu", "Gallery", "Contact"],
    Menu: ["Starters", "Main Course", "Breads", "Desserts", "Beverages"],
    Support: ["FAQs", "Privacy Policy", "Terms & Conditions", "Refund Policy"],
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/40" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full blur-md opacity-50"
                />
                <ChefHat className="relative text-primary w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient font-[family-name:var(--font-playfair)]">
                  शाही आगन
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Since 2025
                </p>
              </div>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Experience the royal flavors of authentic Indian cuisine in the
              heart of Sitamarhi.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "hover:text-blue-500" },
                { icon: Instagram, color: "hover:text-pink-500" },
                { icon: Twitter, color: "hover:text-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 glass rounded-full ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © 2024 Shaahi Aagan Restaurant. All rights reserved.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
            >
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              by
              <a
                href="https://levelupsolution.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-primary hover:underline hover:text-primary-light transition-colors"
              >
                LevelUp Solution
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
