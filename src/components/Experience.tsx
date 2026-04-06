import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background:'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>A journey through impactful projects and growth</p>
          <div className="section-line" />
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px]"
            style={{ background:'linear-gradient(to bottom, var(--accent), transparent)' }} />
          <div className="space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div key={exp.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:index*0.15 }} viewport={{ once:true }}
                  className={`relative flex ${isLeft?'justify-start':'justify-end'}`}>
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-12 h-12 rounded-sm flex items-center justify-center shadow-xl"
                      style={{ background:'var(--accent)', boxShadow:'0 0 18px rgba(0,255,136,0.35)' }}>
                      <Briefcase size={20} className="text-black" />
                    </div>
                  </div>
                  <motion.div whileHover={{ y:-4 }} className="w-full md:w-[46%] card-terminal rounded-sm p-7">
                    <span className="inline-block mb-4 px-3 py-1 rounded-sm text-xs"
                      style={{ background:'rgba(0,255,136,0.07)', color:'var(--accent)', border:'1px solid var(--border-accent)' }}>
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold mb-1" style={{ color:'var(--text-primary)' }}>{exp.title}</h3>
                    <h4 className="text-sm font-semibold mb-4" style={{ color:'var(--accent)' }}>{exp.company}</h4>
                    <p className="text-sm leading-relaxed mb-5" style={{ color:'var(--text-secondary)' }}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => <span key={tech} className="tag-pill">{tech}</span>)}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
