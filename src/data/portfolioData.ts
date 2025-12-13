import { Project, Experience, SkillCategory, SocialLink } from '../types/index';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory and payments',
    longDescription: 'A comprehensive e-commerce solution built for scalability, featuring real-time inventory management, integrated payment processing with Stripe, and a powerful admin dashboard for managing products, orders, and analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management Suite',
    description: 'Collaborative workspace with real-time updates and analytics',
    longDescription: 'A modern project management tool enabling teams to collaborate seamlessly with real-time updates, drag-and-drop task organization, team analytics, and integrated communication features.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'SaaS platform for generating marketing content at scale',
    longDescription: 'An intelligent content generation platform powered by cutting-edge AI models, enabling creators to generate high-quality marketing copy, blog posts, and social media content in seconds with customizable tone and style.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description: 'Data visualization tool with real-time metrics',
    longDescription: 'A sophisticated analytics platform providing real-time insights into user behavior, performance metrics, and business KPIs with interactive visualizations and customizable reports.',
    image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'D3.js', 'Supabase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications for 100K+ users. Architected microservices infrastructure, mentored junior developers, and improved system performance by 45%.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: 'Built and maintained 15+ client projects. Implemented CI/CD pipelines reducing deployment time by 60%, and optimized application performance resulting in 40% faster load times.',
    technologies: ['TypeScript', 'React', 'Express', 'MongoDB', 'Redis'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2018 - 2020',
    description: 'Developed responsive web applications for diverse clients. Collaborated with design teams to create pixel-perfect interfaces and improved accessibility scores to WCAG AA standards.',
    technologies: ['JavaScript', 'React', 'Vue.js', 'SASS', 'Figma'],
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase', 'GraphQL'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Vercel'],
  },
  {
    category: 'Design & UX',
    items: ['Figma', 'UI Design', 'Accessibility', 'Responsive Design', 'Prototyping'],
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' },
];
