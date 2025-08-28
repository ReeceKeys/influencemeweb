import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TierCard({ title, description, price, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden w-full mb-8">
      {/* Top label like Home.jsx */}
      <div className="bg-gray-200 opacity-80 text-center py-1 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-black">
        {title}
      </div>
      {/* Card content */}
      <div className="flex flex-col p-4 justify-between">    
        <p className="text-sm">{description}</p>
        <p className="font-semibold mt-2">{price}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {expanded ? 'Close' : 'Learn More'}
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '30vh' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-4 border-t border-gray-300 text-gray-700"
            >
              {details}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
