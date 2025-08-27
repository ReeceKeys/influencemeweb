// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-500">
          InfluenceMe
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/tier1" className="hover:text-blue-500">Tier 1</Link>
          <Link to="/tier2" className="hover:text-blue-500">Tier 2</Link>
          <Link to="/tier3" className="hover:text-blue-500">Tier 3</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <nav className="flex flex-col space-y-2 p-4">
              <Link onClick={() => setIsOpen(false)} to="/tier1" className="hover:text-blue-500">Tier 1</Link>
              <Link onClick={() => setIsOpen(false)} to="/tier2" className="hover:text-blue-500">Tier 2</Link>
              <Link onClick={() => setIsOpen(false)} to="/tier3" className="hover:text-blue-500">Tier 3</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-blue-500">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
