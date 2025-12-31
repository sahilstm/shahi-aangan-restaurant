'use client';

import { motion } from 'framer-motion';
import { Flame, Leaf, Clock, Star, Crown, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Speciality = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const specialDishes = [
    {
      id: 1,
      name: 'Royal Dum Biryani',
      nameHindi: 'शाही दम बिरयानी',
      description: 'Slow-cooked aromatic basmati rice layered with tender meat, saffron, and 24 exotic spices. A royal feast!',
      price: '₹349',
      originalPrice: '₹449',
      emoji: '🍛',
      image: '/biryani.jpg',
      rating: 4.9,
      reviews: 2847,
      time: '45 min',
      spicy: true,
      bestseller: true,
      tags: ['Bestseller', 'Chef Special'],
    },
    {
      id: 2,
      name: 'Butter Chicken',
      nameHindi: 'बटर चिकन',
      description: 'Creamy tomato-based curry with succulent tandoori chicken pieces, finished with fresh cream and butter.',
      price: '₹299',
      originalPrice: '₹379',
      emoji: '🍗',
      image: '/butter-chicken.jpg',
      rating: 4.8,
      reviews: 2156,
      time: '30 min',
      spicy: false,
      bestseller: true,
      tags: ['Popular', 'Creamy'],
    },
    {
      id: 3,
      name: 'Paneer Tikka Masala',
      nameHindi: 'पनीर टिक्का मसाला',
      description: 'Chargrilled cottage cheese cubes in rich, spiced tomato gravy. A vegetarian delight!',
      price: '₹249',
      originalPrice: '₹329',
      emoji: '🧀',
      image: '/paneer.jpg',
      rating: 4.7,
      reviews: 1893,
      time: '25 min',
      spicy: true,
      bestseller: false,
      veg: true,
      tags: ['Vegetarian', 'Healthy'],
    },
    {
      id: 4,
      name: 'Maharaja Thali',
      nameHindi: 'महाराजा थाली',
      description: 'Complete royal meal with 12 items including dal, sabzi, roti, rice, papad, pickle, and dessert.',
      price: '₹449',
      originalPrice: '₹599',
      emoji: '🍽️',
      image: '/thali.jpg',
      rating: 4.9,
      reviews: 3421,
      time: '20 min',
      spicy: false,
      bestseller: true,
      veg: true,
      tags: ['Complete Meal', 'Value'],
    },
  ];

  return (
    <section id="speciality" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
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
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Our Specialities</span>
            <Crown className="w-5 h-5 text-primary" />
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Signature{' '}
            <span className="text-gradient">Royal Dishes</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            हमारे विशेष व्यंजन - Handcrafted with love, served with pride
          </p>
        </motion.div>

        {/* Main Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Featured Dish Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              className="relative perspective-1000"
            >
              <div className="ultra-glass rounded-[40px] p-8 relative overflow-hidden">
                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  {specialDishes[activeIndex].tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-primary/90 text-black text-xs font-bold rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Discount Badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 z-20 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm"
                >
                  20% OFF
                </motion.div>

                {/* Main Dish Display */}
                <div className="relative h-80 flex items-center justify-center bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-3xl mb-6 overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-conic from-primary/10 via-transparent to-primary/10"
                  />
                  
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10 text-[180px] drop-shadow-2xl"
                  >
                    {specialDishes[activeIndex].emoji}
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-10 text-4xl"
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-10 left-10 text-4xl"
                  >
                    🌶️
                  </motion.div>
                </div>

                {/* Dish Info */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {specialDishes[activeIndex].name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {specialDishes[activeIndex].nameHindi}
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {specialDishes[activeIndex].description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-white">{specialDishes[activeIndex].rating}</span>
                      <span className="text-gray-500 text-sm">({specialDishes[activeIndex].reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{specialDishes[activeIndex].time}</span>
                    </div>
                    {specialDishes[activeIndex].spicy && (
                      <div className="flex items-center gap-1 text-red-500">
                        <Flame className="w-4 h-4" />
                        <span className="text-sm">Spicy</span>
                      </div>
                    )}
                    {specialDishes[activeIndex].veg && (
                      <div className="flex items-center gap-1 text-green-500">
                        <Leaf className="w-4 h-4" />
                        <span className="text-sm">Veg</span>
                      </div>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-center gap-6">
                    <div>
                      <span className="text-gray-500 line-through text-lg">
                        {specialDishes[activeIndex].originalPrice}
                      </span>
                      <span className="text-4xl font-bold text-gradient ml-3">
                        {specialDishes[activeIndex].price}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10 rounded-[50px]" />
            </motion.div>
          </motion.div>

          {/* Right - Dish Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {specialDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                  activeIndex === index
                    ? 'ultra-glass border-primary/50 glow'
                    : 'glass border-transparent hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Dish Emoji */}
                  <motion.div
                    animate={activeIndex === index ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl"
                  >
                    {dish.emoji}
                  </motion.div>

                  {/* Dish Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white text-lg">{dish.name}</h4>
                      {dish.bestseller && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-1">{dish.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-white">{dish.rating}</span>
                      </div>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm text-gray-400">{dish.time}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="text-gray-500 line-through text-sm block">
                      {dish.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-primary to-primary-light rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 btn-glass"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            View Complete Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speciality;