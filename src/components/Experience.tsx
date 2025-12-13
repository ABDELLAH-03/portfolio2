import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-600 to-emerald-400 dark:from-emerald-500 dark:to-emerald-300"></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="md:w-1/2">
                <motion.div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg dark:shadow-slate-900/50 hover:shadow-2xl transition-shadow duration-200 border border-slate-200 dark:border-slate-700 ml-16 md:ml-0">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </motion.div>

                  <div>
                    <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{exp.company}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
