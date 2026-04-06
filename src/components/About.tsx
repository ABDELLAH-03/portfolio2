import { Code2, Lightbulb, Rocket, Users, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code2, title: 'Clean Code', description: 'Maintainable, scalable, documented code' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Analytical approach to hard problems' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and efficiency' },
  { icon: Users, title: 'Collaboration', description: 'Strong team player, clear communicator' },
];
const timeline = [
  { period: 'Present', title: 'Licence Professionnelle en Développement Informatique', school: 'ISMAGI Agdal', location: 'Rabat' },
  { period: '2021 – 2023', title: 'Diplôme Technicien Spécialisé en Développement Digital', school: 'ISTA', location: 'Rabat' },
  { period: '2020 – 2021', title: 'Baccalauréat - Sciences de la Vie et de la Terre', school: 'Lycée Ibn El Khatib', location: 'Salé' },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>Get to know more about my journey and background</p>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }} viewport={{ once:true }}>
            <div className="card-terminal rounded-sm p-8">
              <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom:'1px solid var(--border-subtle)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-3 h-3 rounded-full opacity-70" style={{ background:'var(--accent)' }} />
                <span className="text-xs ml-2" style={{ color:'var(--text-muted)' }}>profile.md</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>Profile</h3>
              <p className="leading-relaxed mb-4 text-sm" style={{ color:'var(--text-secondary)' }}>
                I am a passionate Web Development student, currently pursuing a Professional License at ISMAGI Agdal.
                My journey is driven by building modern, scalable, and user-focused web applications.
              </p>
              <p className="leading-relaxed mb-4 text-sm" style={{ color:'var(--text-secondary)' }}>
                I enjoy transforming ideas into functional digital products, combining front-end creativity with solid back-end logic.
              </p>
              <p className="leading-relaxed text-sm" style={{ color:'var(--text-secondary)' }}>
                Curious, detail-oriented, and motivated by continuous growth — always improving through real-world projects.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }} viewport={{ once:true }}>
            <div className="flex items-center gap-3 mb-8">
              <Calendar style={{ color:'var(--accent)' }} size={22} />
              <h3 className="text-xl font-bold" style={{ color:'var(--text-primary)' }}>Academic Timeline</h3>
            </div>
            <div className="relative pl-8" style={{ borderLeft:'1px solid var(--border-accent)' }}>
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.5, delay:i*0.1 }} viewport={{ once:true }} className="relative mb-8">
                  <div className="timeline-dot absolute -left-[41px] top-4 w-4 h-4 rounded-sm"
                    style={{ background:'var(--accent)', border:'2px solid var(--bg-secondary)' }} />
                  <div className="card-terminal rounded-sm p-5">
                    <span className="tag-pill mb-2 inline-block">{t.period}</span>
                    <h4 className="text-sm font-bold mt-2 mb-1" style={{ color:'var(--text-primary)' }}>{t.title}</h4>
                    <p className="text-xs mb-2" style={{ color:'var(--text-secondary)' }}>{t.school}</p>
                    <div className="flex items-center gap-1 text-xs" style={{ color:'var(--text-muted)' }}>
                      <MapPin size={11} /><span>{t.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          transition={{ duration:0.6 }} viewport={{ once:true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div key={h.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ delay:i*0.1 }} viewport={{ once:true }}
              whileHover={{ scale:1.03 }} className="card-terminal rounded-sm p-6 text-center">
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-4"
                style={{ background:'rgba(0,255,136,0.07)', border:'1px solid var(--border-accent)' }}>
                <h.icon style={{ color:'var(--accent)' }} size={24} />
              </div>
              <h4 className="font-bold mb-1 text-sm" style={{ color:'var(--text-primary)' }}>{h.title}</h4>
              <p className="text-xs" style={{ color:'var(--text-muted)' }}>{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
