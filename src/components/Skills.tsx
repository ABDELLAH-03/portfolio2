import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import AnimatedCard from './ui/AnimatedCard';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <AnimatedCard key={skillGroup.category} delay={index * 0.1} className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b-2 border-emerald-600 dark:border-emerald-500 pb-3 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3 mt-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors duration-200 border border-emerald-200 dark:border-emerald-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
