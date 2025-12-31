'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChefHat, Sparkles, Award, Users, Clock, Heart, Utensils, Star } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: ChefHat,
      title: 'Master Chefs',
      titleHindi: 'मास्टर शेफ',
      description: '25+ years of culinary expertise with authentic recipes passed through generations',
      emoji: '👨‍🍳',
      stat: '15+',
      statLabel: 'Expert Chefs',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Sparkles,
      title: 'Fresh & Organic',
      titleHindi: 'ताज़ा और जैविक',
      description: 'Farm-fresh ingredients sourced daily from local organic farms',
      emoji: '🌿',
      stat: '100%',
      statLabel: 'Fresh Daily',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Award Winning',
      titleHindi: 'पुरस्कार विजेता',
      description: 'Recognized as the best restaurant in Bihar for 5 consecutive years',
      emoji: '🏆',
      stat: '25+',
      statLabel: 'Awards',
      gradient: 'from-yellow-500 to-primary',
    },
    {
      icon: Users,
      title: 'Family Dining',
      titleHindi: 'पारिवारिक भोजन',
      description: 'Spacious seating for 200+ guests with private party halls available',
      emoji: '👨‍👩‍👧‍👦',
      stat: '200+',
      statLabel: 'Capacity',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      titleHindi: 'त्वरित सेवा',
      description: 'Average order ready in 15 minutes with our efficient kitchen system',
      emoji: '⚡',
      stat: '15min',
      statLabel: 'Avg. Time',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      titleHindi: 'प्यार से बना',
      description: 'Every dish prepared with passion, care and traditional cooking methods',
      emoji: '❤️',
      stat: '10K+',
      statLabel: 'Happy Guests',
      gradient: 'from-red-500 to-rose-500',
    },
  ];

  const milestones = [
    { year: '2010', title: 'Journey Begins', description: 'Started with a small 20-seat restaurant' },
    { year: '2015', title: 'First Award', description: 'Won Best Restaurant in Sitamarhi' },
    { year: '2018', title: 'Expansion', description: 'Opened new branch with 200+ seating' },
    { year: '2023', title: 'Milestone', description: 'Served 1 Million+ happy customers' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 ultra-glass rounded-full mb-6"
          >
            <Utensils className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Our Story</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Welcome to{' '}
            <span className="text-gradient">Shaahi Aagan</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-3xl mx-auto">
            हमारी कहानी - A journey of flavors, tradition, and excellence that began in 2010
          </p>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative perspective-1000">
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="preserve-3d"
              >
                <div className="ultra-glass rounded-[40px] p-8 relative overflow-hidden">
                  {/* Main Visual */}
                  <div className="relative h-[400px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-primary/20 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />
                    </motion.div>
                    
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="relative z-10 text-[150px]"
                    >
                      🏛️
                    </motion.div>
                  </div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 ultra-glass rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-xl">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">14+</p>
                        <p className="text-xs text-gray-400">Years Legacy</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -bottom-6 -left-6 ultra-glass rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-xl">
                        <Users className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">1M+</p>
                        <p className="text-xs text-gray-400">Guests Served</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl -z-10 rounded-[50px]" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              A Legacy of{' '}
              <span className="text-gradient">Royal Flavors</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 2010 in the heart of Sitamarhi, <span className="text-primary font-semibold">Shaahi Aagan</span> was born from a passion to bring authentic royal Indian cuisine to Bihar. Our founder, Chef Rajendra Singh, dreamed of creating a place where traditional recipes meet modern hospitality.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Today, we&apos;re proud to be the region&apos;s most beloved restaurant, serving over <span className="text-primary font-semibold">1 million happy customers</span> with our signature dishes and warm, royal hospitality.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 ultra-glass rounded-2xl flex items-center justify-center group-hover:glow transition-all duration-300">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{milestone.title}</h4>
                    <p className="text-sm text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="ultra-glass card-4d rounded-3xl p-6 h-full relative overflow-hidden shine">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 ultra-glass rounded-2xl"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <span className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {feature.emoji}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-primary mb-3">{feature.titleHindi}</p>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

                {/* Stat */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-gradient">{feature.stat}</span>
                  <span className="text-xs text-gray-500">{feature.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;