import React from 'react';
import { motion } from 'framer-motion';

export function Hero4() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <p className="text-gray-600 italic mb-4">
              "TEN Artificial Intelligence transformed my workflow. The AI-driven tools and insights helped me optimize processes and achieve my professional goals."
              </p>
              <p className="font-semibold text-gray-900">- Parth kaul</p>
              <p className="text-gray-500">Mern Stack Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "The TEN AI Engine provided me with the tools and insights I needed to excel in my projects and innovations."
              </p>
              <p className="font-semibold text-gray-900">- Anurag Pradeshi</p>
              <p className="text-gray-500"> Full Stack Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
