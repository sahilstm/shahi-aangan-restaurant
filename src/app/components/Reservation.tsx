'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Business Meeting',
    'Family Gathering', 'Date Night', 'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="reservation" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
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
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Reservation</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Book Your{' '}
            <span className="text-gradient">Royal Table</span>
          </h2>
          <p className="section-subtitle mt-4">
            अपनी टेबल बुक करें - Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ultra-glass rounded-[40px] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why Reserve With Us?
                </h3>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: '✨', title: 'Premium Seating', desc: 'Choose your preferred table location' },
                    { icon: '🎂', title: 'Special Occasions', desc: 'Complimentary cake for birthdays' },
                    { icon: '🍾', title: 'VIP Treatment', desc: 'Priority service for reservations' },
                    { icon: '🎁', title: 'Exclusive Offers', desc: '10% off on pre-booked tables' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 mb-4">For immediate assistance:</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2 px-4 py-2 ultra-glass rounded-full hover:glow transition-all"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all"
                    >
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ultra-glass rounded-[40px] p-8 md:p-10 relative overflow-hidden">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center rounded-[40px]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Reservation Confirmed!</h3>
                  <p className="text-gray-400">We&apos;ll contact you shortly.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests & Occasion */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                        <option key={num} value={num}>{num} {Number(num) === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-4 ultra-glass rounded-2xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select Occasion (Optional)</option>
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>{occ}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    placeholder="Special requests (Optional)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-5"
                >
                  Confirm Reservation 🎉
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  By booking, you agree to our cancellation policy
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;