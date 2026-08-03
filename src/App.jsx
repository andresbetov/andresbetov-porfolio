import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Section from './components/Section/Section.jsx';
import Footer from './components/Footer/Footer.jsx';
import { site } from './data/site.js';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {site.sections
          .filter((section) => !['about', 'skills'].includes(section.id))
          .map((section) => (
            <Section key={section.id} id={section.id} title={section.title} />
          ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
