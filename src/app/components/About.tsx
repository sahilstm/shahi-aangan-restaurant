"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat, Sparkles, Award, Users, Clock, Heart } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      titleHindi: "विशेषज्ञ शेफ",
      description: "20+ years of culinary excellence and authentic recipes",
      emoji: "👨‍🍳",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Fresh Ingredients",
      titleHindi: "ताज़ा सामग्री",
      description: "Locally sourced, farm-fresh ingredients daily",
      emoji: "🌿",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Award Winning",
      titleHindi: "पुरस्कार विजेता",
      description: "Sitamarhi Best Restaurant 2023 & 2024",
      emoji: "🏆",
      color: "from-yellow-500 to-primary",
    },
    {
      icon: Users,
      title: "Family Friendly",
      titleHindi: "पारिवारिक माहौल",
      description: "Perfect ambiance for family gatherings",
      emoji: "👨‍👩‍👧‍👦",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Quick Service",
      titleHindi: "त्वरित सेवा",
      description: "Fast and efficient service guaranteed",
      emoji: "⚡",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Made with Love",
      titleHindi: "प्यार से बना",
      description: "Every dish prepared with passion and care",
      emoji: "❤️",
      color: "from-red-500 to-rose-500",
    },
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers", labelHindi: "खुश ग्राहक" },
    { value: "50+", label: "Menu Items", labelHindi: "मेनू आइटम" },
    { value: "15+", label: "Awards Won", labelHindi: "पुरस्कार" },
    { value: "24/7", label: "Support", labelHindi: "सहायता" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              <span className="text-2xl">✨</span>
              <span className="text-primary font-semibold">About Us</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-playfair)]">
            Welcome to <span className="text-gradient">Shaahi Aagan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            हमारी कहानी - A journey of flavors, tradition, and excellence since
            2025
          </p>
        </motion.div>

        <motion.div
          style={{ scale, opacity }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded in 2025 in the heart of Sitamarhi,{" "}
                <span className="text-primary font-semibold">Shaahi Aagan</span>{" "}
                has been serving authentic Indian cuisine with a royal touch.
                Our journey started with a simple mission - to bring the rich
                flavors of traditional recipes to modern dining.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we&apos;re proud to be Sitamarhi&apos;s favorite dining
                destination, serving over 10,000 happy customers with our
                signature dishes and warm hospitality.
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 card-3d">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl h-64 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-9xl"
                  >
                    🍽️
                  </motion.div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-2xl -z-10 rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="group relative"
            >
              <div className="glass card-3d rounded-2xl p-6 h-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 mb-4"
                >
                  <div className="p-4 glass rounded-2xl inline-block">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {feature.titleHindi}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {feature.emoji}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="text-4xl md:text-6xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.labelHindi}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
