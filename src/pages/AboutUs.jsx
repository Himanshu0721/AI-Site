import React from 'react';
import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-30 to-white">
      <section className="relative py-16 bg-gradient-to-b from-green-300 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Ten Artificial Intelligence
            </h1>
            <p className="text-lg max-w-4xl mx-auto text-green-700">
            Experience an AI-powered platform designed to streamline workflows, enhance decision-making, and generate precise insights. With intelligent automation and tailored recommendations, it empowers users across various domains, making complex tasks simpler, faster, and more efficient.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-700">
              At TEN Artificial Intelligence, we empower individuals with accessible and innovative AI-driven solutions. As a division of <strong>The Entrepreneurship Network</strong>, we nurture talent, foster creativity, and drive professional growth through cutting-edge technology and learning opportunities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-green-800 mb-6">
                Our mission is to revolutionize education through AI-driven technology, personalized learning, and expert mentorship, creating a transformative and inclusive educational ecosystem for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-700">
              Access a suite of platforms tailored to meet every learning and career need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ten AI Consulting labs', description: 'Delive AI solutions in NLP, computer vision and more to optimize operations' },
              { name: 'TEN Idea Engine', description: 'dea Engine is a creative platform for idea development to transform concepts into actionable projects.' },
              { name: 'TEN Health Engine', description: 'TEN Health Engine provides personalized health insights in PDFs.' },
              { name: 'TEN All Engine', description: 'TEN - All Engine generates AI-driven customized PDFs seamlessly.' },
              { name: 'TEN Everything Engine', description: 'TEN Everything Engine offers access to multiple chatbot tools.' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="bg-green-100 rounded-lg p-6 text-center shadow-lg"
              >
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-100 to-green-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore our platforms and join thousands of students achieving their dreams with Ten Artificial Intelligence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-200 transition-colors duration-300"
            >
              <a href='/'>
              Learn More
              </a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
