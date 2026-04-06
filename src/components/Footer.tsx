import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10" style={{ background:'var(--bg-secondary)', borderTop:'1px solid var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="flex flex-col items-center gap-3">
          <p className="text-xl font-bold gradient-text">AC_</p>
          <p className="text-xs" style={{ color:'var(--text-muted)' }}>
            © {year} <span style={{ color:'var(--accent)', fontWeight:600 }}>Abdellah Chahdi</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
