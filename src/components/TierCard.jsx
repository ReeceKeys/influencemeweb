import { motion } from 'framer-motion';

export default function TierCard({ title, description, price, icon: Icon, onLearnMore }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white text-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden w-full mb-8 cursor-pointer"
    >
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
            className="mb-4 p-4 bg-gray-600 rounded-full"
          >
            <Icon className="h-10 w-10 text-yellow-100" />
          </motion.div>
        )}

        {/* Description */}
        <p className="text-sm text-center pb-8">{description}</p>

        {/* Learn More button */}
        <button
          onClick={onLearnMore}
          className="mt-4 py-2 px-4 rounded bg-yellow-100 hover:bg-[#6aa6d4] text-black transition"
        >
          Learn More
        </button>
      </div>

      {/* Price footer (optional, can be removed if only for big card) */}
      <div className="bg-gray-100 text-center py-2 text-sm font-semibold text-gray-800">
        {price}
      </div>
    </motion.div>
  );
}
