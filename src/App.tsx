import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0d0d0d' }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
export default App;
