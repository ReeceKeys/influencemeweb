import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 300); // optional delay after header
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.footer
      className="bg-white p-4 text-center text-sm text-gray-600"
      initial={{ opacity: 0, y: 20 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      &copy; {new Date().getFullYear()} InfluenceMe. All rights reserved.
    </motion.footer>
  );
}
