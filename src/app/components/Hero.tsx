"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Star, Award, Heart, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["30%", "50%", "30%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            borderRadius: ["50%", "30%", "50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-primary/20 blur-3xl"
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 md:px-6 z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Sparkles className="text-primary w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Sitamarhi's Pride Since 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-playfair)]"
            >
              <motion.span
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-gradient block"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                शाही आगन
              </motion.span>
              <span className="text-4xl md:text-5xl block mt-2 text-gray-800 dark:text-gray-200">
                Shaahi Aagan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Experience the{" "}
              <span className="text-primary font-semibold">royal flavors</span>{" "}
              of authentic Indian cuisine in the heart of Sitamarhi.
              <br />
              Where tradition meets taste! 🍛✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-bold rounded-full shadow-lg shadow-primary/50 hover:shadow-2xl hover:shadow-primary/70 transition-all flex items-center gap-2"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 glass glass-hover rounded-full font-bold flex items-center gap-2"
              >
                <div className="p-2 bg-primary rounded-full">
                  <Play className="w-4 h-4 text-black fill-black" />
                </div>
                Watch Video
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  icon: Star,
                  value: "4.9",
                  label: "Rating",
                  color: "text-yellow-500",
                },
                {
                  icon: Award,
                  value: "15+",
                  label: "Awards",
                  color: "text-primary",
                },
                {
                  icon: Heart,
                  value: "10k+",
                  label: "Happy Customers",
                  color: "text-red-500",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass card-3d rounded-2xl p-4 text-center"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div animate={floatingAnimation} className="relative">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: 10 }}
                className="glass card-3d rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />

                <div className="relative bg-gradient-to-br from-primary/30 via-purple-500/30 to-blue-500/30 rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10 text-8xl md:text-9xl"
                  >
                    🍛
                  </motion.div>
                </div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-6 -right-6 glass px-6 py-3 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🥘</span>
                    <div>
                      <div className="font-bold text-sm">Special Thali</div>
                      <div className="text-primary text-xs">₹199</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass px-6 py-3 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🍜</span>
                    <div>
                      <div className="font-bold text-sm">Biryani Special</div>
                      <div className="text-primary text-xs">₹249</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute top-1/2 -right-4 glass p-3 rounded-full shadow-xl"
                >
                  <span className="text-2xl">⭐</span>
                </motion.div>
              </motion.div>

              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10 rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
