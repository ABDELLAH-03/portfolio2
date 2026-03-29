import { ExternalLink, CheckCircle,Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-200"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                        Certifications & Training
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full mb-4" />
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Professional certifications and completed courses
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative 
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                rounded-2xl p-6
                shadow-lg dark:shadow-slate-900/50
                hover:shadow-2xl hover:border-emerald-400/40
                transition-all duration-300"
                        >

                            {/* Top section */}
                            <div className="flex items-center justify-between mb-4">

                                {/* ICON */}

                                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                                                    
                                                                    <img
                                        src={cert.icon}
                                        alt={cert.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
                                    <Award className="text-white" size={25} />
                                </div>
                                {/* STATUS */}
                                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                                    <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={18} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                                {cert.title}
                            </h3>

                            {/* Organization */}
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                                <CheckCircle size={14} className="text-emerald-600 dark:text-emerald-400" />
                                {cert.organization}
                            </div>

                            {/* Button (hover only) */}
                            {cert.credentialUrl && (
                                <div className="mt-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                      border border-emerald-400/30 
                      text-emerald-600 dark:text-emerald-400
                      hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                      transition"
                                    >
                                        <ExternalLink size={16} />
                                        View Certificate
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