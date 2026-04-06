import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { socialLinks } from '../data/portfolioData';
import profileimg from '../img/profile.png';
import cv from '../CV.pdf';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github, Linkedin, Mail,
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function MatrixBackground() {
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\';
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i, x: Math.random() * 100,
    char: chars[Math.floor(Math.random() * chars.length)],
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 8, opacity: Math.random() * 0.18 + 0.04,
  }));
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 4 + 2, delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));
  return (
    <div className="stars-container">
      {stars.map((s) => (
        <div key={`s${s.id}`} className="star" style={{
          left: `${s.x}%`, top: `${s.y}%`,
          width: `${s.size}px`, height: `${s.size}px`,
          '--duration': `${s.duration}s`, '--delay': `${s.delay}s`,
          '--max-opacity': s.opacity,
        } as React.CSSProperties} />
      ))}
      {particles.map((p) => (
        <div key={`m${p.id}`} className="matrix-char" style={{
          left: `${p.x}%`,
          '--fall-duration': `${p.duration}s`, '--fall-delay': `${p.delay}s`,
          '--max-opacity': p.opacity,
        } as React.CSSProperties}>{p.char}</div>
      ))}
    </div>
  );
}

const ROLES = ['Full-Stack Developer', 'React & Node.js Engineer', 'Web App Builder', 'UI/UX Enthusiast'];

export default function Hero() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cur = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < cur.length) {
        ref.current = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 55);
      } else { ref.current = setTimeout(() => setTyping(false), 2000); }
    } else {
      if (displayed.length > 0) {
        ref.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else { setRoleIndex((i) => (i + 1) % ROLES.length); setTyping(true); }
    }
    return () => { if (ref.current) clearTimeout(ref.current); };
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'var(--bg-primary)' }}>
      <MatrixBackground />
      <motion.div animate={{ x:[0,60,0], y:[0,-40,0] }} transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${dark ? 'rgba(0,255,136,0.06)' : 'rgba(0,170,85,0.07)'} 0%, transparent 70%)` }} />
      <motion.div animate={{ x:[0,-50,0], y:[0,30,0] }} transition={{ duration: 25, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${dark ? 'rgba(0,255,136,0.04)' : 'rgba(0,170,85,0.05)'} 0%, transparent 70%)` }} />

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">

          <motion.div variants={item} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full scale-110 blur-2xl"
                style={{ background: `radial-gradient(circle, ${dark ? 'rgba(0,255,136,0.25)' : 'rgba(0,170,85,0.2)'} 0%, transparent 70%)` }} />
              <div className="relative w-40 h-40 rounded-full p-[2px]"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dim), var(--bg-primary), var(--accent))' }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                  <img src={profileimg} alt="Abdellah Chahdi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}>
            Hi, I'm <span className="gradient-text">Abdellah Chahdi</span>
          </motion.h1>

          <motion.div variants={item} className="text-xl md:text-2xl font-medium h-8"
            style={{ color: 'var(--accent)' }}>
            {displayed}<span className="cursor">|</span>
          </motion.div>

          <motion.p variants={item} className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}>
            Passionate about building robust, responsive, and high-performance full-stack web applications.
            Transforming ideas into clean, efficient, and user-focused digital experiences.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <motion.a href={cv} download target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(0,255,136,0.4)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-semibold text-black"
              style={{ background: 'var(--accent)' }}>
               Download CV
            </motion.a>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-semibold"
              style={{ border: '1px solid var(--border-accent)', color: 'var(--accent)', background: 'transparent' }}>
              View My Work
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex justify-center gap-4 pt-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]; if (!Icon) return null;
              return (
                <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-sm transition-all"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border-accent)'; el.style.color='var(--accent)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border-subtle)'; el.style.color='var(--text-secondary)'; }}
                  aria-label={link.name}><Icon size={18} /></motion.a>
              );
            })}
          </motion.div>

          <motion.div variants={item} animate={{ y:[0,8,0] }} transition={{ duration:2, repeat:Infinity }} className="pt-6">
            <a href="#about" className="inline-block transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e)=>(e.currentTarget.style.color='var(--accent)')}
              onMouseLeave={(e)=>(e.currentTarget.style.color='var(--text-muted)')}>
              <ArrowDown size={26} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
