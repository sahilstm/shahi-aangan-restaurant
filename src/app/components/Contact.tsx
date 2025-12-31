"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      titleHindi: "स्थान",
      info: "Main Road, Near City Center",
      infoHindi: "Sitamarhi, Bihar 843302",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Phone",
      titleHindi: "फ़ोन",
      info: "+91 98765 43210",
      infoHindi: "+91 98765 43211",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      titleHindi: "ईमेल",
      info: "info@shaahiaagan.com",
      infoHindi: "booking@shaahiaagan.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      titleHindi: "समय",
      info: "10:00 AM - 11:00 PM",
      infoHindi: "All Days Open",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, name: "Twitter", color: "hover:text-blue-400" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 glass rounded-full inline-flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span className="text-primary font-semibold">Contact Us</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-playfair)]">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            हमसे संपर्क करें
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="glass card-3d rounded-2xl p-6 text-center h-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="p-4 glass rounded-2xl inline-block mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{item.titleHindi}</p>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.info}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.infoHindi}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-black font-bold py-4 rounded-xl shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                Connect with us
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Visit Our Restaurant
            </h3>

            <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl h-64 md:h-80 flex items-center justify-center mb-6 relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"
              />
              <div className="relative z-10 text-center">
                <MapPin className="w-20 h-20 text-primary mx-auto mb-4" />
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  Shaahi Aagan Restaurant
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Main Road, Sitamarhi, Bihar
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glass glass-hover py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5 text-primary" />
              Get Directions
            </motion.button>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Open Daily
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Call for Reservation
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
