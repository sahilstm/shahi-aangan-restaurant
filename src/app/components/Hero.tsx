'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, Award, ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useRef, useMemo } from 'react';

const generateParticles = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const particles = useMemo(() => generateParticles(), []);

  const stats = [
    { icon: '⭐', value: '4.9', label: 'Rating', suffix: '/5' },
    { icon: '🏆', value: '15', label: 'Awards', suffix: '+' },
    { icon: '❤️', value: '10K', label: 'Happy Customers', suffix: '+' },
    { icon: '🍽️', value: '50', label: 'Dishes', suffix: '+' },
  ];

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-mesh opacity-80" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl"
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration + 3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 md:px-6 pt-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 ultra-glass rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                ✨ Sitamarhi&apos;s #1 Restaurant Since 2010
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-gradient font-[family-name:var(--font-playfair)] mb-4">
                शाही आगन
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-gray-300">
                Where <span className="text-primary font-semibold">Royalty</span> Meets Flavor
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the authentic taste of India with our royal recipes, 
              crafted with love and served with tradition. Every dish tells a story of heritage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group btn-primary flex items-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glass flex items-center gap-3"
              >
                <div className="p-2 bg-primary/20 rounded-full">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                </div>
                Watch Story
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="ultra-glass card-4d rounded-2xl p-4 text-center"
                >
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 4D Food Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative perspective-1000"
          >
            {/* Main 4D Card */}
            <motion.div
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 3, 0, -3, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative preserve-3d"
            >
              <div className="relative ultra-glass rounded-[40px] p-8 overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
                
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 rounded-3xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                  {/* Rotating Background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-primary/20"
                  />
                  
                  {/* Center Dish */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 text-[150px] md:text-[200px] drop-shadow-2xl"
                  >
                    🍛
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-10 border-2 border-dashed border-primary/20 rounded-full"
                  />
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 ultra-glass rounded-2xl px-5 py-3 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥘</span>
                    <div>
                      <p className="font-bold text-white">Special Thali</p>
                      <p className="text-primary text-sm font-semibold">₹299</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 ultra-glass rounded-2xl px-5 py-3 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🍜</span>
                    <div>
                      <p className="font-bold text-white">Royal Biryani</p>
                      <p className="text-primary text-sm font-semibold">₹349</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 -right-4 ultra-glass p-4 rounded-full shadow-2xl"
                >
                  <span className="text-2xl">⭐</span>
                </motion.div>
              </div>

              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/10 to-primary/20 blur-3xl -z-10 rounded-[50px]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-gray-500"
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-2 ultra-glass rounded-full"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;