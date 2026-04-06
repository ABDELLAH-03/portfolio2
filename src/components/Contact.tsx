import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';


interface FormData { name:string; email:string; message:string; }
interface FormErrors { name?:string; email?:string; message?:string; }

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name:'', email:'', message:'' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e:FormErrors = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.length < 10) e.message = 'Too short (min 10 chars)';
    setErrors(e); return Object.keys(e).length === 0;
  };

  // const handleSubmit = async (ev:FormEvent<HTMLFormElement>) => {
  //   ev.preventDefault(); if (!validate()) return;
  //   setIsSubmitting(true);
  //   await new Promise((r)=>setTimeout(r,1500));
  //   setSubmitted(true); setFormData({name:'',email:'',message:''}); setIsSubmitting(false);
  //   setTimeout(()=>setSubmitted(false),5000);
  // };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_qdc0kwu',      
        'template_05lx299',    
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'k0mm4-z_vN1bFcBkE'          
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
    }

    setIsSubmitting(false);
  };

  const contactItems = [
    { icon:Mail, label:'Email', value:'abdellah.chahdi.03@gmail.com', href:'mailto:abdellah.chahdi.03@gmail.com', color:'#3b82f6' },
    { icon:Phone, label:'Phone', value:'+212 688 967 390', href:'tel:+212688967390', color:'#00ff88' },
    { icon:MapPin, label:'Location', value:'Salé, Morocco', href:'#', color:'#ec4899' },
  ];

  return (
    <section id="contact" className="py-24" style={{ background:'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color:'var(--text-primary)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm mb-4" style={{ color:'var(--text-secondary)' }}>Let's connect and collaborate on meaningful projects.</p>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }} viewport={{ once:true }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color:'var(--text-primary)' }}>Let's Connect</h3>
            <p className="leading-relaxed mb-10 text-sm" style={{ color:'var(--text-secondary)' }}>
              Whether you want to discuss a collaboration, share an idea, or just say hello — I'd love to hear from you.
            </p>
            <div className="space-y-3">
              {contactItems.map((c,i) => (
                <motion.a key={c.label} href={c.href} initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }} transition={{ delay:i*0.1 }} viewport={{ once:true }}
                  whileHover={{ x:4 }} className="flex items-center gap-4 p-4 rounded-sm transition-all card-terminal">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background:c.color+'18', border:`1px solid ${c.color}33` }}>
                    <c.icon style={{ color:c.color }} size={18} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color:'var(--text-muted)' }}>{c.label}</p>
                    <p className="font-semibold text-sm" style={{ color:'var(--text-primary)' }}>{c.value}</p>
                  </div>
                </motion.a>
              ))}
              <div className="p-4 rounded-sm mt-2" style={{ background:'rgba(0,255,136,0.05)', border:'1px solid var(--border-accent)' }}>
                <p className="text-sm font-semibold" style={{ color:'var(--accent)' }}>Currently Open For</p>
                <p className="text-xs mt-1" style={{ color:'var(--text-secondary)' }}>Full-Stack Dev · Freelance · Internships</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }} viewport={{ once:true }}>
            <form onSubmit={handleSubmit} className="rounded-sm p-8 space-y-5 card-terminal">
              <div className="flex items-center gap-2 pb-4" style={{ borderBottom:'1px solid var(--border-subtle)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-3 h-3 rounded-full opacity-70" style={{ background:'var(--accent)' }} />
                <span className="text-xs ml-2" style={{ color:'var(--text-muted)' }}>Send a Message</span>
              </div>
              {submitted && (
                <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
                  className="p-4 rounded-sm text-center text-sm"
                  style={{ background:'rgba(0,255,136,0.06)', border:'1px solid var(--border-accent)', color:'var(--accent)' }}>
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {[{ id:'name', label:'Name', type:'text', ph:'Your name' },
                { id:'email', label:'Email', type:'email', ph:'your.email@example.com' }].map((f)=>(
                <div key={f.id}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color:'var(--text-secondary)' }}>{f.label}</label>
                  <input type={f.type} value={formData[f.id as keyof FormData]}
                    onChange={(e)=>setFormData({...formData,[f.id]:e.target.value})}
                    className="terminal-input" placeholder={f.ph} />
                  {errors[f.id as keyof FormErrors] && <p className="text-red-400 text-xs mt-1">{errors[f.id as keyof FormErrors]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color:'var(--text-secondary)' }}>Message</label>
                <textarea rows={5} value={formData.message} placeholder="Your message..."
                  onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  className="terminal-input resize-none" />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <motion.button type="submit" disabled={isSubmitting}
                whileHover={{ scale:1.02, boxShadow:'0 0 22px rgba(0,255,136,0.35)' }} whileTap={{ scale:0.98 }}
                className="w-full py-3 rounded-sm font-semibold text-black disabled:opacity-50"
                style={{ background:'var(--accent)' }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
