import { ExternalLink, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24" style={{ background:'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            Certifications <span className="gradient-text">&</span> Training
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>Professional certifications and completed courses</p>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.1 }} viewport={{ once:true }}
              className="card-terminal rounded-sm p-6 group">
              <div className="flex items-center justify-between mb-5">
                <div className="p-2 rounded-sm" style={{ background:'rgba(0,255,136,0.07)', border:'1px solid var(--border-accent)' }}>
                  <img src={cert.icon} alt={cert.title} className="w-9 h-9 object-contain" />
                </div>
                <div className="p-2 rounded-sm" style={{ background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.3)' }}>
                  <Award style={{ color:'#8b5cf6' }} size={20} />
                </div>
                <div className="p-2 rounded-sm" style={{ background:'rgba(0,255,136,0.07)', border:'1px solid var(--border-accent)' }}>
                  <CheckCircle style={{ color:'var(--accent)' }} size={16} />
                </div>
              </div>
              <h3 className="text-sm font-bold mb-2 transition-colors" style={{ color:'var(--text-primary)' }}
                onMouseEnter={(e)=>(e.currentTarget.style.color='var(--accent)')}
                onMouseLeave={(e)=>(e.currentTarget.style.color='var(--text-primary)')}>
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-xs mb-4" style={{ color:'var(--text-muted)' }}>
                <CheckCircle size={11} style={{ color:'var(--accent)' }} />{cert.organization}
              </div>
              {cert.credentialUrl && (
                <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href={cert.credentialUrl} target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs transition-all"
                    style={{ border:'1px solid var(--border-accent)', color:'var(--accent)', background:'rgba(0,255,136,0.05)' }}>
                    <ExternalLink size={12} />View Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
