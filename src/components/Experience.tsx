import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
  id="experience"
  className="py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-200"
>
  <div className="max-w-6xl mx-auto px-6">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
        Work Experience
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full" />
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-emerald-600 to-emerald-400 opacity-60" />

      <div className="space-y-24">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                  <Briefcase size={24} className="text-white" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className={`w-full md:w-[46%] bg-white dark:bg-slate-800 p-8 rounded-xl
                border border-slate-200 dark:border-slate-700
                shadow-lg dark:shadow-slate-900/50
                hover:shadow-2xl hover:border-emerald-400/40
                transition-all duration-300`}
              >
                {/* Period */}
                <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium
                  bg-emerald-100 dark:bg-emerald-900/30
                  text-emerald-700 dark:text-emerald-400"
                >
                  {exp.period}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {exp.title}
                </h3>

                {/* Company */}
                <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.04 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full text-sm font-medium
                        bg-slate-100 dark:bg-slate-700
                        text-slate-700 dark:text-slate-300
                        hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                        hover:text-emerald-700 dark:hover:text-emerald-400
                        transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
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
