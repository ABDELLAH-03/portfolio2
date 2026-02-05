import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './ui/AnimatedCard';
import { Calendar, MapPin } from 'lucide-react';
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/70 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center">Profile</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am passionate Web Development student , currently pursuing a Professional License at ISMAGI Agdal. My journey is driven by a strong interest in building modern, scalable, and user-focused web applications.

              I enjoy transforming ideas into functional digital products by combining front-end creativity with solid back-end logic. Through my studies and personal projects, I’ve gained hands-on experience in full-stack web development, working with modern frameworks, databases, and web technologies.

              Curious, detail-oriented, and motivated by continuous growth, I’m constantly seeking to improve my skills through real-world projects that emphasize clean code, performance, and practical impact.            </p>
            </div>
            


          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <section className="py-16 px-6">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-12">
                  <Calendar className="text-emerald-400" size={28} />
                  <h2 className="text-3xl font-bold text-white">Academic Timeline</h2>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-slate-700 pl-10 space-y-10">
                  {/* Item 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <span className="absolute -left-[52px] top-4 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-950" />

                    <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-6 shadow-lg">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-emerald-400 font-semibold"> Present</span>

                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        Licence Professionnelle en Développement Informatique              </h3>

                      <p className="text-slate-400 uppercase text-sm tracking-wide mb-2">
                        Institut Superieur de Management d'Administration et genie informatique(ISMAGI)
                      </p>

                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={16} />
                        <span>Rabat</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[52px] top-4 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-950" />

                    <div className="bg-slate-800/70 border border-slate-800 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-emerald-400 font-semibold">2021 – 2023</span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        Diplôme Technicien Spécialisé en Développement Digital
                      </h3>

                      <p className="text-slate-400 uppercase text-sm tracking-wide mb-2">
                        Institut Spécialisé de Technologie Appliquée (ISTA)
                      </p>

                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={16} />
                        <span>Rabat</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[52px] top-4 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-950" />

                    <div className="bg-slate-800/70 border border-slate-800 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-emerald-400 font-semibold">2020 – 2021</span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        Baccalauréat option science de la vie et de la terre              </h3>

                      <p className="text-slate-400 uppercase text-sm tracking-wide mb-2">
                        Lycee ibn el khatib
                      </p>

                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={16} />
                        <span>Sale</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
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
