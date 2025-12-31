'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      nameHindi: 'राजेश कुमार',
      location: 'Sitamarhi',
      rating: 5,
      text: 'Best biryani I have ever had! The flavors are absolutely authentic and the service is exceptional. This place has become our family favorite for all celebrations.',
      textHindi: 'अब तक की सबसे अच्छी बिरयानी! स्वाद बिल्कुल प्रामाणिक है।',
      avatar: '👨',
      role: 'Food Blogger',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Priya Singh',
      nameHindi: 'प्रिया सिंह',
      location: 'Muzaffarpur',
      rating: 5,
      text: 'Wonderful ambiance and delicious food. Perfect for family gatherings and special occasions. The staff is incredibly courteous and attentive.',
      textHindi: 'शानदार माहौल और स्वादिष्ट खाना। परिवार के लिए एकदम सही।',
      avatar: '👩',
      role: 'Regular Customer',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Amit Sharma',
      nameHindi: 'अमित शर्मा',
      location: 'Darbhanga',
      rating: 5,
      text: 'Authentic flavors that remind me of my grandmother\'s cooking. I drive 50km just to eat here. The Maharaja Thali is absolutely worth every penny!',
      textHindi: 'दादी माँ के खाने जैसा स्वाद। 50 किमी दूर से आता हूँ!',
      avatar: '🧑',
      role: 'Food Enthusiast',
      date: '3 weeks ago',
    },
    {
      id: 4,
      name: 'Sneha Kumari',
      nameHindi: 'स्नेहा कुमारी',
      location: 'Sitamarhi',
      rating: 5,
      text: 'The paneer tikka is to die for! Amazing quality, reasonable prices, and the best part - they use fresh ingredients. Highly recommend the desserts too!',
      textHindi: 'पनीर टिक्का लाजवाब है! ताजा सामग्री का इस्तेमाल करते हैं।',
      avatar: '👧',
      role: 'College Student',
      date: '1 week ago',
    },
    {
      id: 5,
      name: 'Vikash Yadav',
      nameHindi: 'विकाश यादव',
      location: 'Patna',
      rating: 5,
      text: 'Royal treatment for royal taste! Visited during my trip to Sitamarhi and was blown away. The butter chicken is hands down the best in Bihar!',
      textHindi: 'शाही स्वाद के लिए शाही सेवा! बटर चिकन बिहार में सबसे अच्छा!',
      avatar: '👦',
      role: 'Business Traveler',
      date: '2 months ago',
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
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
            <span className="text-2xl">💬</span>
            <span className="text-primary font-semibold">Testimonials</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            What Our{' '}
            <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="section-subtitle mt-4">
            ग्राहकों की राय - Real stories from real food lovers
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 ultra-glass rounded-full shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 ultra-glass rounded-full shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="ultra-glass rounded-[40px] p-8 md:p-12 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-primary" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-center mb-8">
                    <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-4">
                      &ldquo;{testimonials[activeIndex].text}&rdquo;
                    </p>
                    <p className="text-primary text-lg">
                      &ldquo;{testimonials[activeIndex].textHindi}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 ultra-glass rounded-full flex items-center justify-center text-4xl mb-4"
                    >
                      {testimonials[activeIndex].avatar}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-primary mb-1">
                      {testimonials[activeIndex].nameHindi}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {testimonials[activeIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { platform: 'Google', rating: '4.9', reviews: '2,847', emoji: '🔍' },
            { platform: 'Zomato', rating: '4.8', reviews: '1,956', emoji: '🍽️' },
            { platform: 'TripAdvisor', rating: '4.9', reviews: '892', emoji: '✈️' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="ultra-glass rounded-2xl p-6 text-center"
            >
              <span className="text-3xl mb-2 block">{item.emoji}</span>
              <p className="text-sm text-gray-400 mb-2">{item.platform}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-gradient">{item.rating}</span>
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">{item.reviews} reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;