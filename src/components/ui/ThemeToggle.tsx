import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.3 }}>
          <Moon size={20} />
        </motion.div>
      ) : (
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.3 }}>
          <Sun size={20} />
        </motion.div>
      )}
    </motion.button>
  );
}
