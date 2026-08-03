import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import Footer from './components/Footer/Footer.jsx';
import { site } from './data/site.js';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {site.sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
