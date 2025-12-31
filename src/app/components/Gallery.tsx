"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { emoji: "🍛", name: "Biryani", category: "Main Course" },
    { emoji: "🥘", name: "Curry", category: "Main Course" },
    { emoji: "🍜", name: "Noodles", category: "Fast Food" },
    { emoji: "🥗", name: "Salad", category: "Healthy" },
    { emoji: "🍝", name: "Pasta", category: "Continental" },
    { emoji: "🍕", name: "Pizza", category: "Fast Food" },
    { emoji: "🍰", name: "Cake", category: "Dessert" },
    { emoji: "☕", name: "Coffee", category: "Beverages" },
    { emoji: "🥙", name: "Wrap", category: "Fast Food" },
    { emoji: "🍖", name: "Tandoori", category: "Starters" },
    { emoji: "🧁", name: "Cupcake", category: "Dessert" },
    { emoji: "🍹", name: "Mocktail", category: "Beverages" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              <span className="text-2xl">📸</span>
              <span className="text-primary font-semibold">Gallery</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-playfair)]">
            Visual <span className="text-gradient">Delights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            हमारी खूबसूरत तस्वीरें
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(index)}
              className="group relative cursor-pointer"
            >
              <div className="glass card-3d rounded-2xl overflow-hidden h-64 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-7xl md:text-8xl"
                  >
                    {item.emoji}
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Maximize2 className="w-8 h-8 text-white mb-2" />
                    <p className="text-white font-bold text-lg">{item.name}</p>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-bold rounded-full shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
          >
            View More Photos 📷
          </motion.button>
        </motion.div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="glass rounded-3xl p-8 max-w-4xl w-full"
          >
            <div className="text-9xl text-center mb-4">
              {galleryItems[selectedImage].emoji}
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {galleryItems[selectedImage].name}
            </h3>
            <p className="text-center text-gray-400">
              {galleryItems[selectedImage].category}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
