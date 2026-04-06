import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const catColors: Record<string,string> = {
  'Programming Languages':'#3b82f6','Frameworks & Libraries':'#8b5cf6',
  'Databases & Data Systems':'#ec4899','Cloud & DevOps':'#10b981',
  'Tools & IDEs':'#f97316','Modeling & Methodologies':'#ef4444',
  'Backend & APIs':'#06b6d4','Web & Mobile Technologies':'#84cc16',
};
const catEmoji: Record<string,string> = {
  'Programming Languages':'</>','Frameworks & Libraries':'⚛',
  'Databases & Data Systems':'DB','Cloud & DevOps':'☁',
  'Tools & IDEs':'IDE','Modeling & Methodologies':'UML',
  'Backend & APIs':'API','Web & Mobile Technologies':'WEB',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background:'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>Technologies and tools I work with</p>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((group, index) => (
            <motion.div key={group.category} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*0.07 }} viewport={{ once:true }}
              className="card-terminal rounded-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center text-xs font-bold"
                  style={{ background:catColors[group.category]+'1a', border:`1px solid ${catColors[group.category]}44`, color:catColors[group.category] }}>
                  {catEmoji[group.category]||'//'}
                </div>
                <h3 className="text-sm font-bold" style={{ color:'var(--text-primary)' }}>{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span key={skill} whileHover={{ scale:1.06, y:-1 }}
                    className="tag-pill cursor-default">{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
