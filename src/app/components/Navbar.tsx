"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Home", "About", "Menu", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass border-b border-white/10 dark:border-gray-700/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
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
                <h1 className="text-2xl md:text-3xl font-bold text-gradient font-[family-name:var(--font-playfair)]">
                  शाही आगन
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Sitamarhi
                </p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#d4af37" }}
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-3 glass glass-hover rounded-full"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary" />
                  )}
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-bold rounded-full shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Book Table
              </motion.button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 glass rounded-lg"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-black font-bold rounded-full">
                Book Table
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
