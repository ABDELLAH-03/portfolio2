import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.05,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: hoverScale }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}
