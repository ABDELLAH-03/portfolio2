import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './ui/AnimatedCard';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical approach to tackling complex technical challenges',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Passionate Developer & Tech Enthusiast</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in building modern web applications that solve real-world problems. My journey in tech started with a curiosity for how things work and evolved into a passion for creating digital experiences that matter.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe in writing code that is not just functional, but elegant and maintainable. Whether working independently or as part of a team, I bring dedication, creativity, and a results-driven approach to every project.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1} className="p-8 hover:shadow-2xl">
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <item.icon className="text-emerald-600 dark:text-emerald-400 mb-4" size={40} />
              </motion.div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
