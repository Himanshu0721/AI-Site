import React from 'react';
import { motion } from 'framer-motion';

export function Hero({ featureCardRef }) {

  const scrollToHero2 = () => {
    const offset = 80; 
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-gradient-to-b from-green-100 to-green-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to TEN Artificial Intelligence
        </motion.h1>
        <motion.p
          className="text-xl mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience an AI-powered platform designed to streamline workflows, enhance decision-making, and generate precise insights. With intelligent automation and tailored recommendations, it empowers users across various domains, making complex tasks simpler, faster, and more efficient.
        </motion.p>
        <motion.button
          className="mt-10 bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-green-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToHero2} 
        >
          Get Started
        </motion.button>
      </div>
    </header>
  );
}
