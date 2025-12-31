'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const foodEmojis = ['🍛', '🥘', '🍜', '🥙', '🍲', '🧆', '🍗', '🥗'];

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            filter: 'blur(20px)'
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Mesh Background */}
          <div className="absolute inset-0 bg-mesh">
            {/* Floating Orbs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${150 + i * 50}px`,
                  height: `${150 + i * 50}px`,
                  background: i % 2 === 0 
                    ? 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                  left: `${(i * 15) % 80}%`,
                  top: `${(i * 12) % 80}%`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* 4D Rotating Plate */}
            <div className="relative w-48 h-48 mb-10 perspective-1000">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary/30 glow" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6"
              >
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-primary-light border-l-primary-light/30" />
              </motion.div>

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12"
              >
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-500/30" />
              </motion.div>

              {/* Center Plate */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-16 rounded-full ultra-glass flex items-center justify-center preserve-3d"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl"
                >
                  🍽️
                </motion.span>
              </motion.div>

              {/* Floating Food Items */}
              {foodEmojis.slice(0, 6).map((emoji, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  className="absolute inset-0"
                  style={{ transformOrigin: 'center center' }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute text-2xl"
                    style={{
                      left: '50%',
                      top: '-10px',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {emoji}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Restaurant Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center mb-10"
            >
              <motion.h1
                animate={{
                  textShadow: [
                    '0 0 20px rgba(212,175,55,0.5)',
                    '0 0 40px rgba(212,175,55,0.8)',
                    '0 0 20px rgba(212,175,55,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-7xl font-bold text-gradient mb-3 font-[family-name:var(--font-playfair)]"
              >
                शाही आगन
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-400 tracking-widest uppercase"
              >
                Royal Dining Experience
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-72 md:w-96 mb-6">
              <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden ultra-glass">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full"
                >
                  {/* Animated Shine */}
                  <motion.div
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                </motion.div>
              </div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-center text-sm text-gray-500 mt-3"
              >
                {Math.min(Math.round(progress), 100)}% Loaded
              </motion.p>
            </div>

            {/* Loading Text with Dots */}
            <motion.div className="flex items-center gap-1 text-gray-400">
              <span>Preparing your royal feast</span>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="text-primary font-bold"
                >
                  .
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 flex items-center gap-4 text-gray-600"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm">Since 2010</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;