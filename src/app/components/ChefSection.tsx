'use client';

import { motion } from 'framer-motion';
import { Award, Star, Instagram, Linkedin } from 'lucide-react';

const ChefSection = () => {
  const chefs = [
    {
      name: 'Chef Rajendra Singh',
      nameHindi: 'शेफ राजेंद्र सिंह',
      role: 'Head Chef & Founder',
      experience: '30+ Years',
      specialty: 'North Indian & Mughlai',
      emoji: '👨‍🍳',
      awards: 12,
      rating: 4.9,
      bio: 'Master of traditional recipes with modern presentation techniques.',
      gradient: 'from-primary to-amber-500',
    },
    {
      name: 'Chef Priya Sharma',
      nameHindi: 'शेफ प्रिया शर्मा',
      role: 'Executive Chef',
      experience: '18+ Years',
      specialty: 'South Indian & Fusion',
      emoji: '👩‍🍳',
      awards: 8,
      rating: 4.8,
      bio: 'Expert in creating innovative fusion dishes while respecting traditions.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Chef Arun Kumar',
      nameHindi: 'शेफ अरुण कुमार',
      role: 'Tandoor Specialist',
      experience: '22+ Years',
      specialty: 'Tandoori & Kebabs',
      emoji: '🧑‍🍳',
      awards: 6,
      rating: 4.9,
      bio: 'The maestro behind our signature tandoori dishes and kebabs.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Chef Meena Devi',
      nameHindi: 'शेफ मीना देवी',
      role: 'Dessert Expert',
      experience: '15+ Years',
      specialty: 'Indian Desserts',
      emoji: '👩‍🍳',
      awards: 5,
      rating: 4.8,
      bio: 'Creating sweet magic with traditional Indian desserts and modern twists.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="chefs" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
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
            <span className="text-2xl">👨‍🍳</span>
            <span className="text-primary font-semibold">Our Team</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Meet Our{' '}
            <span className="text-gradient">Master Chefs</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            हमारे मास्टर शेफ - The culinary artists behind our royal flavors
          </p>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group"
            >
              <div className="ultra-glass card-4d rounded-3xl p-6 h-full relative overflow-hidden text-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${chef.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-32 h-32 mx-auto mb-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${chef.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                  <div className="relative w-full h-full ultra-glass rounded-full flex items-center justify-center text-6xl">
                    {chef.emoji}
                  </div>
                  
                  {/* Award Badge */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-full shadow-lg"
                  >
                    <Award className="w-5 h-5 text-black" />
                  </motion.div>
                </motion.div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1">{chef.name}</h3>
                <p className="text-sm text-primary mb-2">{chef.nameHindi}</p>
                <p className="text-xs text-gray-400 mb-4">{chef.role}</p>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{chef.experience}</p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{chef.awards}</p>
                    <p className="text-xs text-gray-500">Awards</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-lg font-bold text-white">{chef.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>

                {/* Specialty */}
                <div className="mb-4">
                  <span className="px-3 py-1 ultra-glass rounded-full text-xs text-primary">
                    {chef.specialty}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                  {chef.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    href="#"
                    className="p-2 ultra-glass rounded-lg hover:text-pink-500 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    href="#"
                    className="p-2 ultra-glass rounded-lg hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="ultra-glass rounded-3xl p-8 max-w-3xl mx-auto relative">
            <span className="absolute -top-4 left-8 text-6xl text-primary opacity-50">&ldquo;</span>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-4">
              Cooking is not just about ingredients, it&apos;s about creating memories and sharing love through every dish we serve.
            </p>
            <footer className="text-primary font-semibold">
              — Chef Rajendra Singh, Founder
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefSection;