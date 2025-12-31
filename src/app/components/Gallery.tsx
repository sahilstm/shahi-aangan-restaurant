'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const galleryItems = [
    { id: 1, emoji: '🍛', name: 'Royal Biryani', category: 'Main Course', likes: 2847 },
    { id: 2, emoji: '🥘', name: 'Butter Chicken', category: 'Main Course', likes: 2156 },
    { id: 3, emoji: '🍜', name: 'Dal Makhani', category: 'Main Course', likes: 1893 },
    { id: 4, emoji: '🧀', name: 'Paneer Tikka', category: 'Starters', likes: 1654 },
    { id: 5, emoji: '🍗', name: 'Tandoori Chicken', category: 'Starters', likes: 2341 },
    { id: 6, emoji: '🥗', name: 'Fresh Salad', category: 'Healthy', likes: 987 },
    { id: 7, emoji: '🍮', name: 'Gulab Jamun', category: 'Desserts', likes: 2087 },
    { id: 8, emoji: '☕', name: 'Masala Chai', category: 'Beverages', likes: 3421 },
    { id: 9, emoji: '🫓', name: 'Butter Naan', category: 'Breads', likes: 1456 },
    { id: 10, emoji: '🍖', name: 'Seekh Kebab', category: 'Starters', likes: 1789 },
    { id: 11, emoji: '🥭', name: 'Mango Lassi', category: 'Beverages', likes: 1234 },
    { id: 12, emoji: '🍨', name: 'Kulfi', category: 'Desserts', likes: 1567 },
  ];

  const toggleLike = (id: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage);
    if (direction === 'prev') {
      const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
      setSelectedImage(galleryItems[newIndex].id);
    } else {
      const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryItems[newIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-5 py-2 ultra-glass rounded-full mb-6"
          >
            <span className="text-2xl">📸</span>
            <span className="text-primary font-semibold">Gallery</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Visual{' '}
            <span className="text-gradient">Delights</span>
          </h2>
          <p className="section-subtitle mt-4">
            हमारी खूबसूरत तस्वीरें - A feast for your eyes
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`group relative cursor-pointer ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="ultra-glass card-4d rounded-3xl overflow-hidden h-full min-h-[200px] md:min-h-[250px] relative">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`${
                      index % 5 === 0 ? 'text-8xl md:text-9xl' : 'text-6xl md:text-7xl'
                    }`}
                  >
                    {item.emoji}
                  </motion.div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{item.category}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(item.id);
                        }}
                        className="flex items-center gap-2 text-white"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors ${
                            likedImages.has(item.id)
                              ? 'text-red-500 fill-red-500'
                              : 'text-white'
                          }`}
                        />
                        <span className="text-sm">
                          {item.likes + (likedImages.has(item.id) ? 1 : 0)}
                        </span>
                      </motion.button>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 ultra-glass rounded-full"
                        >
                          <Share2 className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 ultra-glass rounded-full"
                        >
                          <ZoomIn className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 ultra-glass rounded-full text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Photos 📷
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 ultra-glass rounded-full z-10"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 p-3 ultra-glass rounded-full z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 p-3 ultra-glass rounded-full z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Content */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="ultra-glass rounded-3xl p-8 max-w-2xl w-full text-center"
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedImage);
                if (!item) return null;
                return (
                  <>
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-[150px] mb-6"
                    >
                      {item.emoji}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-primary mb-6">{item.category}</p>
                    
                    <div className="flex items-center justify-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(item.id)}
                        className="flex items-center gap-2 px-4 py-2 ultra-glass rounded-full"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedImages.has(item.id)
                              ? 'text-red-500 fill-red-500'
                              : 'text-white'
                          }`}
                        />
                        <span>{item.likes + (likedImages.has(item.id) ? 1 : 0)}</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-4 py-2 ultra-glass rounded-full"
                      >
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </motion.button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;