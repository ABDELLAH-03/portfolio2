import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';
import Button from './ui/Button';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={item}>
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Full Stack <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent">Developer</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Crafting elegant digital experiences with modern technologies. I specialize in building scalable, performant applications that solve real-world problems.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Project
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex justify-center gap-6 pt-8">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={item}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-8"
          >
            <a href="#about" className="inline-block text-slate-400 dark:text-slate-600 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
              <ArrowDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
