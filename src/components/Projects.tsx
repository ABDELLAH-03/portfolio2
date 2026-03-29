import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/portfolioData';
import AnimatedCard from './ui/AnimatedCard';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              delay={index * 0.1}
              className="overflow-hidden cursor-pointer group
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-lg dark:shadow-slate-900/50
                hover:shadow-2xl hover:border-emerald-400/40
                transition-all duration-300"
              onClick={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  layoutId={`image-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* EXPANDED */}
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </motion.div>
                )}

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium
                        bg-slate-100 dark:bg-slate-700
                        text-slate-700 dark:text-slate-300
                        hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                        hover:text-emerald-700 dark:hover:text-emerald-400
                        transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-6">

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 
                        text-emerald-600 dark:text-emerald-400
                        hover:text-emerald-700 dark:hover:text-emerald-300
                        font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 
                        text-slate-600 dark:text-slate-400
                        hover:text-slate-900 dark:hover:text-slate-200
                        font-medium transition-colors duration-200"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  )}

                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}