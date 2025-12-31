"use client";

import { motion } from "framer-motion";
import { Plus, Star, Flame, Leaf } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  nameHindi: string;
  price: string;
  description: string;
  emoji: string;
  category: string;
  rating: number;
  spicy?: boolean;
  veg: boolean;
  popular?: boolean;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Main Course", "Starters", "Breads", "Desserts"];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Royal Biryani",
      nameHindi: "शाही बिरयानी",
      price: "₹250",
      description: "Aromatic basmati rice with tender meat and exotic spices",
      emoji: "🍛",
      category: "Main Course",
      rating: 4.9,
      spicy: true,
      veg: false,
      popular: true,
    },
    {
      id: 2,
      name: "Paneer Tikka",
      nameHindi: "पनीर टिक्का",
      price: "₹180",
      description: "Grilled cottage cheese marinated in spices",
      emoji: "🧈",
      category: "Starters",
      rating: 4.8,
      spicy: true,
      veg: true,
      popular: true,
    },
    {
      id: 3,
      name: "Butter Chicken",
      nameHindi: "बटर चिकन",
      price: "₹220",
      description: "Creamy tomato gravy with tender chicken pieces",
      emoji: "🍗",
      category: "Main Course",
      rating: 4.9,
      veg: false,
    },
    {
      id: 4,
      name: "Dal Makhani",
      nameHindi: "दाल मखनी",
      price: "₹150",
      description: "Slow cooked black lentils with butter and cream",
      emoji: "🥘",
      category: "Main Course",
      rating: 4.7,
      veg: true,
    },
    {
      id: 5,
      name: "Tandoori Roti",
      nameHindi: "तंदूरी रोटी",
      price: "₹20",
      description: "Fresh clay oven baked bread",
      emoji: "🫓",
      category: "Breads",
      rating: 4.6,
      veg: true,
    },
    {
      id: 6,
      name: "Gulab Jamun",
      nameHindi: "गुलाब जामुन",
      price: "₹60",
      description: "Sweet milk dumplings in sugar syrup",
      emoji: "🍮",
      category: "Desserts",
      rating: 4.8,
      veg: true,
      popular: true,
    },
    {
      id: 7,
      name: "Malai Kofta",
      nameHindi: "मलाई कोफ्ता",
      price: "₹190",
      description: "Cottage cheese balls in rich creamy gravy",
      emoji: "🥙",
      category: "Main Course",
      rating: 4.7,
      veg: true,
    },
    {
      id: 8,
      name: "Tandoori Chicken",
      nameHindi: "तंदूरी चिकन",
      price: "₹280",
      description: "Clay oven roasted chicken with spices",
      emoji: "🍖",
      category: "Starters",
      rating: 4.9,
      spicy: true,
      veg: false,
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
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
              <span className="text-2xl">🍽️</span>
              <span className="text-primary font-semibold">Our Menu</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-[family-name:var(--font-playfair)]">
            Discover Our <span className="text-gradient">Delicious Menu</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            हमारा स्वादिष्ट मेनू देखें
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-primary-light text-black shadow-lg shadow-primary/50"
                  : "glass glass-hover"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass card-3d rounded-2xl p-6 h-full relative overflow-hidden shine">
                <div className="absolute top-0 right-0 text-8xl opacity-5 pointer-events-none">
                  {item.emoji}
                </div>

                <div className="flex gap-2 mb-4 relative z-10">
                  {item.veg && (
                    <div className="p-1.5 glass rounded-lg">
                      <Leaf className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                  {item.spicy && (
                    <div className="p-1.5 glass rounded-lg">
                      <Flame className="w-4 h-4 text-red-500" />
                    </div>
                  )}
                  {item.popular && (
                    <div className="px-2 py-1 bg-primary/20 rounded-lg">
                      <span className="text-xs font-semibold text-primary">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-4"
                >
                  {item.emoji}
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">{item.nameHindi}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-primary">
                      {item.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gradient-to-r from-primary to-primary-light text-black rounded-full shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass glass-hover rounded-full font-bold text-lg group"
          >
            View Full Menu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
