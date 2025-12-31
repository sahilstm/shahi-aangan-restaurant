'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChefHat, Moon, Sun, Menu, X, Phone, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speciality', href: '#speciality' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="hidden md:block bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-gray-400">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Main Road, Sitamarhi, Bihar
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Open: 10:00 AM - 11:00 PM</span>
            <div className="h-4 w-px bg-gray-700" />
            <span className="text-primary font-medium">🎉 Free Delivery Above ₹500</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className={`mx-4 md:mx-6 rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'ultra-glass shadow-2xl shadow-black/20' 
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="relative p-2 ultra-glass rounded-xl">
                    <ChefHat className="text-primary w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gradient font-[family-name:var(--font-playfair)]">
                    शाही आगन
                  </h1>
                  <p className="text-xs text-gray-500 tracking-wider">ROYAL DINING</p>
                </div>
              </motion.a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="relative px-4 py-2 text-gray-300 hover:text-primary font-medium transition-colors group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300 rounded-full" />
                  </motion.a>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-3 ultra-glass rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-primary" />
                      ) : (
                        <Moon className="w-5 h-5 text-primary" />
                      )}
                    </motion.div>
                  </motion.button>
                )}

                {/* CTA Button */}
                <motion.a
                  href="#reservation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex btn-primary text-sm"
                >
                  <span>Book Table</span>
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-3 ultra-glass rounded-xl"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="w-6 h-6 text-primary" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden mx-4 mt-2"
        >
          <div className="ultra-glass rounded-2xl p-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-lg text-gray-300 hover:text-primary hover:bg-white/5 rounded-xl transition-all"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              className="block btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Table
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;