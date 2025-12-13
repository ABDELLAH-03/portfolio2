import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p className="text-sm">
            {currentYear} John Doe. All rights reserved.
          </motion.p>
          <motion.p className="text-sm flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            Built with{' '}
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>{' '}
            using React & TypeScript
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
