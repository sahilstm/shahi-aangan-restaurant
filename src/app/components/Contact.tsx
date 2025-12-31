'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      titleHindi: 'हमारा पता',
      line1: 'Main Road, Near City Center',
      line2: 'Sitamarhi, Bihar 843302',
      action: 'Get Directions',
      actionIcon: Navigation,
      href: 'https://maps.google.com',
      gradient: 'from-red-500 to-pink-500',
      emoji: '📍',
    },
    {
      icon: Phone,
      title: 'Call Us',
      titleHindi: 'कॉल करें',
      line1: '+91 98765 43210',
      line2: '+91 98765 43211',
      action: 'Call Now',
      actionIcon: Phone,
      href: 'tel:+919876543210',
      gradient: 'from-green-500 to-emerald-500',
      emoji: '📞',
    },
    {
      icon: Mail,
      title: 'Email Us',
      titleHindi: 'ईमेल करें',
      line1: 'info@shaahiaagan.com',
      line2: 'booking@shaahiaagan.com',
      action: 'Send Email',
      actionIcon: Send,
      href: 'mailto:info@shaahiaagan.com',
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '✉️',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      titleHindi: 'समय',
      line1: 'Mon - Sun: 10:00 AM - 11:00 PM',
      line2: 'Kitchen closes at 10:30 PM',
      action: 'Book Table',
      actionIcon: MessageCircle,
      href: '#reservation',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '⏰',
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:bg-blue-600', followers: '25K' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:bg-pink-600', followers: '50K' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:bg-blue-400', followers: '10K' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:bg-red-600', followers: '15K' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSending(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"
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
            <span className="text-2xl">📞</span>
            <span className="text-primary font-semibold">Contact Us</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Get In{' '}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mt-4">
            हमसे संपर्क करें - We&apos;d love to hear from you
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="ultra-glass card-4d rounded-3xl p-6 h-full relative overflow-hidden text-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Emoji Background */}
                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-30 transition-opacity">
                  {item.emoji}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 mb-4 inline-block"
                >
                  <div className="p-4 ultra-glass rounded-2xl inline-block group-hover:glow transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-primary mb-3">{item.titleHindi}</p>
                  <p className="text-gray-400 text-sm">{item.line1}</p>
                  <p className="text-gray-500 text-sm mb-4">{item.line2}</p>

                  {/* Action Button */}
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 ultra-glass rounded-full text-sm font-medium text-primary hover:text-white hover:bg-primary/20 transition-all"
                  >
                    <item.actionIcon className="w-4 h-4" />
                    {item.action}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ultra-glass rounded-[40px] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-400 mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-5 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right - Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="ultra-glass rounded-[40px] p-8 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">
                Find Us Here
              </h3>

              {/* Map Placeholder */}
              <div className="relative h-[300px] bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 rounded-3xl overflow-hidden mb-6">
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 30, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-conic from-primary/10 via-transparent to-primary/10"
                />

                {/* Map Pin */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="relative">
                      <MapPin className="w-16 h-16 text-primary" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/30 rounded-full blur-sm"
                      />
                    </div>
                  </motion.div>
                  <p className="mt-4 text-lg font-bold text-white">Shaahi Aagan Restaurant</p>
                  <p className="text-sm text-gray-400">Main Road, Sitamarhi, Bihar</p>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/5 rounded-full" />
              </div>

              {/* Get Directions Button */}
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-glass flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5 text-primary" />
                Open in Google Maps
              </motion.a>
            </div>

            {/* Social Media */}
            <div className="ultra-glass rounded-[40px] p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Follow Us
              </h3>
              <p className="text-gray-400 mb-6">
                Stay connected for updates, offers & food stories
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`ultra-glass rounded-2xl p-4 flex items-center gap-4 transition-all ${social.color}`}
                  >
                    <div className="p-3 bg-white/10 rounded-xl">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{social.name}</p>
                      <p className="text-sm text-gray-400">{social.followers} Followers</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;