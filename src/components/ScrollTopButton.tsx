import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top-btn" aria-label="Scroll to top">
          <ArrowUp size={18} className="text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
