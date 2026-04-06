import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' }, { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' }, { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certificates' }, { href: '#contact', label: 'Contact' },
  ];

  const navBg = isScrolled
    ? (dark ? 'rgba(13,13,13,0.95)' : 'rgba(245,245,245,0.95)')
    : 'transparent';

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: navBg, backdropFilter: isScrolled ? 'blur(10px)' : 'none',
               borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <motion.a href="#" whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text">
            AC<span style={{ color: 'var(--accent)' }}>_</span>
          </motion.a>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button onClick={toggleTheme} whileTap={{ scale: 0.9 }}
              className="p-2 rounded-sm transition-all flex items-center gap-1.5 text-sm"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', color: 'var(--accent)' }}
              aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline text-xs" style={{ color: 'var(--text-secondary)' }}>
                {dark ? 'Light' : 'Dark'}
              </span>
            </motion.button>

            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden" style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen
                  ? <motion.div key="x" initial={{ rotate: 0 }} animate={{ rotate: 90 }}><X size={22} /></motion.div>
                  : <motion.div key="m" initial={{ rotate: 90 }} animate={{ rotate: 0 }}><Menu size={22} /></motion.div>}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} className="md:hidden"
              style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
              <div className="flex flex-col gap-4 py-5 px-2">
                {navLinks.map((link, i) => (
                  <motion.a key={link.href} href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-secondary)' }}>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
