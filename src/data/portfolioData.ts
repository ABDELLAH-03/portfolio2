import { Project, Experience, SkillCategory, SocialLink } from '../types/index';
import movie from '../img/movie.jpeg';
import card from '../img/card.jpeg'
import meteo from '../img/meteo.jpeg'
import cms from '../img/cms.webp'

export const projects: Project[] = [
  
  {
    id: '1',
    title: 'Film Management',
    description: 'Collaborative film library with real-time tracking and production insights',
    longDescription: 'A modern project management tool enabling teams to collaborate seamlessly with real-time updates, drag-and-drop task organization, team analytics, and integrated communication features.',
    image: `${movie}`,
    tags: ['javascript', 'React-vite', 'Tailwind'],
    liveUrl: 'https://moviehub-ac.vercel.app/',
    githubUrl: 'https://github.com/ABDELLAH-03/movies-app-',
  },
  {
    id: '2',
    title: 'Meteo App',
    description: 'Weather app with real-time data and forecasts',
    longDescription: 'A weather app that provides real-time weather data and forecasts for any location in the world.',
    image: `${meteo}`,
    tags: ['React', 'Tailwind','Node.js' ,'OpenWeatherMap API'],
    // liveUrl: 'https://meteo-app-ac.vercel.app/',
    githubUrl: 'https://github.com/ABDELLAH-03/meteo-app',
  },
  // {
  //   id: '3',
  //   title: 'E-Commerce Platform',
  //   description: 'Full-stack marketplace with real-time inventory and payments',
  //   longDescription: 'A comprehensive e-commerce solution built for scalability, featuring real-time inventory management, integrated payment processing with Stripe, and a powerful admin dashboard for managing products, orders, and analytics.',
  //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['Dart', 'Flutter', 'Firebase'],
  //   // liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  // },
  
  {
    id: '4',
    title: 'Multi Player Card Game',
    description: 'Strategic deck-building meets real-time PVP duels in this original browser-based card game.',
    longDescription: 'A real-time multiplayer card game platform powered by Node.js, Socket.io, and React, delivering seamless live gameplay, synchronized game state management, and a dynamic, responsive frontend for strategic browser-based duels.',
    image: `${card}`,
    tags: ['Node.js', 'Express.js', 'React', 'Socket.io','mongoDB','tailwindCSS','Postman'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Mini CMS',
    description: 'Content Management System for managing content of a website',
    longDescription: 'A sophisticated analytics platform providing real-time insights into user behavior, performance metrics, and business KPIs with interactive visualizations and customizable reports.',
    image: `${cms}`,
    tags: ['Laravel', 'Sqlite', 'Tailwind', 'CKEditor','Herd'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const experiences: Experience[] = [
  // {
  //   id: '1',
  //   title: 'Senior Full Stack Developer',
  //   company: 'Tech Innovations Inc.',
  //   period: '2022 - Present',
  //   description: 'Led development of scalable web applications for 100K+ users. Architected microservices infrastructure, mentored junior developers, and improved system performance by 45%.',
  //   technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
  // },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: "Ministère de l’Énergie, des Mines et de l’Environnement - Département de l’Environnement",
    period: '03/2023 - 05/2023',
    description: 'Developed and maintained web applications for the Ministry of Energy, Mines and Environment. Implemented CI/CD pipelines reducing deployment time by 60%, and optimized application performance resulting in 40% faster load times.',
    technologies: ['React', 'Laravel', 'Tailwind', 'My SQL', 'StarUml'],
  },
  // {
  //   id: '3',
  //   title: 'Frontend Developer',
  //   company: 'Creative Web Agency',
  //   period: '2018 - 2020',
  //   description: 'Developed responsive web applications for diverse clients. Collaborated with design teams to create pixel-perfect interfaces and improved accessibility scores to WCAG AA standards.',
  //   technologies: ['JavaScript', 'React', 'Vue.js', 'SASS', 'Figma'],
  // },
];

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: ['Java','Python','JavaScript', 'TypeScript',  'PHP',  'Redux'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'React Native', 'Spring Boot', 'Django', 'Laravel', 'Bootstrap','Tailwind CSS','Express.js','Vue.js'],
  },
  {
    category: 'Databases & Data Systems',
    items: ['MySQL', 'SQL Server', 'SQLLite', 'MongoDB(NOSQL)'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'Git', 'Github','GitLab','CI/CD Pipelines','Postman','Vercel'],
  },
  {
    category: 'Tools & IDEs',
    items: ['Vs Code', 'Visual Studio', 'StarUml', 'Figma', 'Docker Desktop','Cursor'],
  },
  {
    category: 'Modeling & Methodologies',
    items: ['UML', 'Merise', 'Agile Scrum'],
  },
  {
    category: 'Backend & APIs',
    items: ['RESTful APIs', 'JWT Authentication', 'API Integration', 'JSON'],
  },
  {
    category: 'Web & Mobile Technologies',
    items: ['HTML5', 'CSS3', 'Accessibility', 'TailwindCSS', 'React Native','Responsive Design'],
  },

];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ABDELLAH-03', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdellah-chahdi-98ab6a267/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:abdellahchahdi2003@gmail.com', icon: 'Mail' },
];
