import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24" style={{ background:'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>A selection of my most impactful work</p>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.id}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.08 }} viewport={{ once:true }}
              className="card-terminal rounded-sm overflow-hidden cursor-pointer group"
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}>

              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <motion.img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ filter:'brightness(0.75) saturate(0.7)' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)' }} />
                <div className="absolute top-2 left-2">
                  <span className="text-xs px-2 py-1 rounded-sm"
                    style={{ background:'rgba(0,255,136,0.1)', border:'1px solid var(--border-accent)', color:'var(--accent)' }}>
                    {String(index + 1).padStart(2,'0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold mb-1.5" style={{ color:'var(--text-primary)' }}>{project.title}</h3>
                <p className="text-xs mb-3 leading-relaxed" style={{ color:'var(--text-secondary)' }}>{project.description}</p>

                {expandedId === project.id && (
                  <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }}
                    className="mb-3 pt-2" style={{ borderTop:'1px solid var(--border-subtle)' }}>
                    <p className="text-xs leading-relaxed" style={{ color:'var(--text-muted)' }}>{project.longDescription}</p>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                </div>

                <div className="flex gap-4" style={{ borderTop:'1px solid var(--border-subtle)', paddingTop:'12px' }}>
                  {project.liveUrl && (
                    <motion.a href={project.liveUrl} whileHover={{ x:3 }}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color:'var(--accent)' }} onClick={(e)=>e.stopPropagation()}>
                      <ExternalLink size={12} />Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a href={project.githubUrl} whileHover={{ x:3 }}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color:'var(--text-muted)' }}
                      onMouseEnter={(e)=>(e.currentTarget.style.color='var(--text-primary)')}
                      onMouseLeave={(e)=>(e.currentTarget.style.color='var(--text-muted)')}
                      onClick={(e)=>e.stopPropagation()}>
                      <Github size={12} />Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
