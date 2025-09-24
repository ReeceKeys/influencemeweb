import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function TierCard({ title, description, price, details, icon: Icon, nav }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const isNav = !!nav; // check if nav exists

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden w-full mb-8">
      {/* Top label */}
      <div className="bg-gray-200 opacity-80 text-center py-1 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-black">
        {title}
      </div>

      {/* Card content */}
      <div className="flex flex-col p-6 items-center justify-between">
        {/* Icon */}
        {Icon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-4"
          >
            <Icon className={`h-10 w-10 ${isNav ? 'text-[#b8ad69]' : 'text-[#3776a6]'}`} />
          </motion.div>
        )}

        <p className="text-sm text-center pb-8">{description}</p>

        <button
          onClick={() => {
            if (nav) {
              navigate(nav); // go to page if nav exists
            } else {
              setExpanded(!expanded); // expand/collapse details
            }
          }}
          className={`mt-4 py-2 px-4 rounded transition ${
            isNav
              ? 'bg-[#b8ad69] hover:bg-[#dbd088] text-white'
              : 'bg-[#3776a6] hover:bg-[#6aa6d4] text-white'
          }`}
        >
          {expanded ? 'Close' : 'Learn More'}
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '20vh' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="p-4 border-t border-gray-300 text-gray-700 text-sm leading-relaxed"
            >
              {details}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
