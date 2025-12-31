'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Star, Flame, Leaf, Clock, Filter, Search, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';

interface MenuItem {
  id: number;
  name: string;
  nameHindi: string;
  price: number;
  originalPrice?: number;
  description: string;
  emoji: string;
  category: string;
  rating: number;
  reviews: number;
  time: string;
  spicy?: boolean;
  veg: boolean;
  bestseller?: boolean;
  new?: boolean;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { name: 'All', emoji: '🍽️', count: 24 },
    { name: 'Starters', emoji: '🥗', count: 6 },
    { name: 'Main Course', emoji: '🍛', count: 8 },
    { name: 'Biryani', emoji: '🍚', count: 4 },
    { name: 'Breads', emoji: '🫓', count: 5 },
    { name: 'Desserts', emoji: '🍮', count: 4 },
    { name: 'Beverages', emoji: '🥤', count: 5 },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Royal Dum Biryani',
      nameHindi: 'शाही दम बिरयानी',
      price: 349,
      originalPrice: 449,
      description: 'Aromatic basmati rice with tender meat & exotic spices',
      emoji: '🍛',
      category: 'Biryani',
      rating: 4.9,
      reviews: 2847,
      time: '45 min',
      spicy: true,
      veg: false,
      bestseller: true,
    },
    {
      id: 2,
      name: 'Paneer Tikka',
      nameHindi: 'पनीर टिक्का',
      price: 229,
      description: 'Chargrilled cottage cheese with mint chutney',
      emoji: '🧀',
      category: 'Starters',
      rating: 4.8,
      reviews: 1893,
      time: '20 min',
      spicy: true,
      veg: true,
      bestseller: true,
    },
    {
      id: 3,
      name: 'Butter Chicken',
      nameHindi: 'बटर चिकन',
      price: 299,
      originalPrice: 379,
      description: 'Creamy tomato curry with tandoori chicken',
      emoji: '🍗',
      category: 'Main Course',
      rating: 4.9,
      reviews: 2156,
      time: '30 min',
      veg: false,
      bestseller: true,
    },
    {
      id: 4,
      name: 'Dal Makhani',
      nameHindi: 'दाल मखनी',
      price: 189,
      description: 'Slow-cooked black lentils with butter & cream',
      emoji: '🥘',
      category: 'Main Course',
      rating: 4.7,
      reviews: 1654,
      time: '25 min',
      veg: true,
    },
    {
      id: 5,
      name: 'Tandoori Roti',
      nameHindi: 'तंदूरी रोटी',
      price: 25,
      description: 'Fresh clay oven baked whole wheat bread',
      emoji: '🫓',
      category: 'Breads',
      rating: 4.6,
      reviews: 3421,
      time: '5 min',
      veg: true,
    },
    {
      id: 6,
      name: 'Gulab Jamun',
      nameHindi: 'गुलाब जामुन',
      price: 99,
      description: 'Sweet milk dumplings in rose-flavored syrup',
      emoji: '🍮',
      category: 'Desserts',
      rating: 4.8,
      reviews: 2087,
      time: '10 min',
      veg: true,
      bestseller: true,
    },
    {
      id: 7,
      name: 'Chicken Tikka',
      nameHindi: 'चिकन टिक्का',
      price: 279,
      description: 'Spiced yogurt marinated grilled chicken',
      emoji: '🍖',
      category: 'Starters',
      rating: 4.8,
      reviews: 1789,
      time: '25 min',
      spicy: true,
      veg: false,
    },
    {
      id: 8,
      name: 'Veg Biryani',
      nameHindi: 'वेज बिरयानी',
      price: 249,
      description: 'Fragrant rice with seasonal vegetables & saffron',
      emoji: '🍚',
      category: 'Biryani',
      rating: 4.7,
      reviews: 1456,
      time: '40 min',
      veg: true,
      new: true,
    },
    {
      id: 9,
      name: 'Masala Chai',
      nameHindi: 'मसाला चाय',
      price: 49,
      description: 'Traditional spiced Indian tea with milk',
      emoji: '☕',
      category: 'Beverages',
      rating: 4.9,
      reviews: 4521,
      time: '5 min',
      veg: true,
    },
    {
      id: 10,
      name: 'Mango Lassi',
      nameHindi: 'मैंगो लस्सी',
      price: 89,
      description: 'Creamy yogurt smoothie with fresh mango',
      emoji: '🥭',
      category: 'Beverages',
      rating: 4.8,
      reviews: 2341,
      time: '5 min',
      veg: true,
      new: true,
    },
    {
      id: 11,
      name: 'Mutton Rogan Josh',
      nameHindi: 'मटन रोगन जोश',
      price: 399,
      description: 'Kashmiri style slow-cooked mutton curry',
      emoji: '🍖',
      category: 'Main Course',
      rating: 4.9,
      reviews: 1234,
      time: '50 min',
      spicy: true,
      veg: false,
    },
    {
      id: 12,
      name: 'Naan',
      nameHindi: 'नान',
      price: 45,
      description: 'Soft leavened bread from clay oven',
      emoji: '🥖',
      category: 'Breads',
      rating: 4.7,
      reviews: 2890,
      time: '8 min',
      veg: true,
    },
  ];

  const filteredItems = useMemo(() => {
    let items = menuItems;
    
    if (activeCategory !== 'All') {
      items = items.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameHindi.includes(searchQuery)
      );
    }
    
    switch (sortBy) {
      case 'price-low':
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      default:
        items = [...items].sort((a, b) => b.reviews - a.reviews);
    }
    
    return items;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 ultra-glass rounded-full mb-6"
          >
            <span className="text-2xl">🍽️</span>
            <span className="text-primary font-semibold">Our Menu</span>
          </motion.div>

          <h2 className="section-title text-gray-900 dark:text-white">
            Explore Our{' '}
            <span className="text-gradient">Delicious Menu</span>
          </h2>
          <p className="section-subtitle mt-4">
            हमारा स्वादिष्ट मेनू - Authentic flavors, royal taste
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 ultra-glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-12 pr-8 py-4 ultra-glass rounded-2xl text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[180px]"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-3 pb-4 mb-10 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-primary to-primary-light text-black shadow-lg shadow-primary/50'
                  : 'ultra-glass text-gray-300 hover:text-white hover:border-primary/30'
              }`}
            >
              <span className="text-xl">{category.emoji}</span>
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.name
                  ? 'bg-black/20'
                  : 'bg-white/10'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="ultra-glass card-4d rounded-3xl p-5 h-full relative overflow-hidden shine">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {item.veg && (
                      <span className="p-1.5 bg-green-500/20 rounded-lg">
                        <Leaf className="w-4 h-4 text-green-500" />
                      </span>
                    )}
                    {item.spicy && (
                      <span className="p-1.5 bg-red-500/20 rounded-lg">
                        <Flame className="w-4 h-4 text-red-500" />
                      </span>
                    )}
                  </div>

                  {item.bestseller && (
                    <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-primary text-black text-xs font-bold rounded-full">
                      Bestseller
                    </div>
                  )}

                  {item.new && (
                    <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      New
                    </div>
                  )}

                  {/* Image/Emoji */}
                  <div className="relative h-40 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-7xl relative z-10"
                    >
                      {item.emoji}
                    </motion.div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-2 left-2 text-2xl opacity-30">✨</div>
                      <div className="absolute bottom-2 right-2 text-2xl opacity-30">🌿</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-0.5 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-primary mb-2">{item.nameHindi}</p>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    {/* Rating & Time */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium text-white">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{item.time}</span>
                      </div>
                    </div>

                    {/* Price & Add Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through mr-2">
                            ₹{item.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-gradient">
                          ₹{item.price}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gradient-to-r from-primary to-primary-light rounded-xl text-black shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-white mb-2">No dishes found</h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-glass"
          >
            View Complete Menu
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;