'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: 14,
      suffix: '+',
      label: 'Years of Excellence',
      labelHindi: 'साल का अनुभव',
      icon: '🏆',
      color: 'from-yellow-500 to-primary',
    },
    {
      value: 1,
      suffix: 'M+',
      label: 'Happy Customers',
      labelHindi: 'खुश ग्राहक',
      icon: '😊',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Signature Dishes',
      labelHindi: 'विशेष व्यंजन',
      icon: '🍛',
      color: 'from-orange-500 to-red-500',
    },
    {
      value: 25,
      suffix: '+',
      label: 'Awards Won',
      labelHindi: 'पुरस्कार',
      icon: '🥇',
      color: 'from-purple-500 to-pink-500',
    },
    {
      value: 15,
      suffix: '+',
      label: 'Expert Chefs',
      labelHindi: 'विशेषज्ञ शेफ',
      icon: '👨‍🍳',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: 4.9,
      suffix: '★',
      label: 'Average Rating',
      labelHindi: 'औसत रेटिंग',
      icon: '⭐',
      color: 'from-primary to-yellow-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
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
          <h2 className="section-title text-gray-900 dark:text-white">
            Our{' '}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle mt-4">
            Numbers that speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="ultra-glass card-4d rounded-3xl p-6 text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-4xl mb-4"
                >
                  {stat.icon}
                </motion.div>

                {/* Animated Counter */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                    delay={index * 0.1}
                  />
                </div>

                {/* Labels */}
                <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
                <p className="text-xs text-primary">{stat.labelHindi}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({
  value,
  suffix,
  isInView,
  delay,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Number(current.toFixed(1)));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  );
};

export default Stats;