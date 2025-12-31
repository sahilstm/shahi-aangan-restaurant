"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      nameHindi: "राजेश कुमार",
      location: "Sitamarhi",
      rating: 5,
      text: "Best biryani in town! The flavors are absolutely authentic and the service is top-notch. Highly recommended!",
      textHindi: "शहर की सबसे अच्छी बिरयानी!",
      avatar: "👨",
      role: "Food Blogger",
    },
    {
      name: "Priya Singh",
      nameHindi: "प्रिया सिंह",
      location: "Sitamarhi",
      rating: 5,
      text: "Wonderful ambience and delicious food. Perfect place for family gatherings. The staff is very courteous.",
      textHindi: "बहुत ही शानदार माहौल और स्वादिष्ट खाना!",
      avatar: "👩",
      role: "Regular Customer",
    },
    {
      name: "Amit Sharma",
      nameHindi: "अमित शर्मा",
      location: "Muzaffarpur",
      rating: 5,
      text: "Authentic flavors, great service! I drive from Muzaffarpur just to eat here. Worth every mile!",
      textHindi: "प्रामाणिक स्वाद, शानदार सेवा!",
      avatar: "🧑",
      role: "Food Enthusiast",
    },
    {
      name: "Sneha Kumari",
      nameHindi: "स्नेहा कुमारी",
      location: "Darbhanga",
      rating: 5,
      text: "The paneer tikka is to die for! Amazing food quality and reasonable prices. Best restaurant experience!",
      textHindi: "पनीर टिक्का बेहतरीन है!",
      avatar: "👧",
      role: "College Student",
    },
    {
      name: "Vikash Yadav",
      nameHindi: "विकास यादव",
      location: "Sitamarhi",
      rating: 5,
      text: "Royal treatment for royal taste! The ambiance is perfect for dates and celebrations. Love this place!",
      textHindi: "शाही स्वाद के लिए शाही सेवा!",
      avatar: "👦",
      role: "Marketing Professional",
    },
    {
      name: "Anita Devi",
      nameHindi: "अनीता देवी",
      location: "Sheohar",
      rating: 5,
      text: "Fresh ingredients, authentic recipes, and lovely staff. My family's favorite restaurant in the region!",
      textHindi: "ताजा सामग्री और प्रामाणिक व्यंजन!",
      avatar: "👩‍🦰",
      role: "Home Maker",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
              <span className="text-2xl">💬</span>
              <span className="text-primary font-semibold">Testimonials</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-playfair)]">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            ग्राहकों की राय
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="glass card-3d rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-20 h-20 text-primary" />
                </div>

                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 italic relative z-10">
                  "{testimonial.text}"
                </p>
                <p className="text-primary text-sm mb-6 relative z-10">
                  "{testimonial.textHindi}"
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mt-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl font-bold text-gradient mb-2"
              >
                4.9
              </motion.div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
            </div>

            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                10,000+ Reviews
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Trusted by thousands of satisfied customers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
