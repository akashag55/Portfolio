import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import TechnicalDetails from './sections/TechnicalDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Experience />
          </div>
        </section>
        <section id="technical" className="py-20">
          <div className="container mx-auto px-4">
            <TechnicalDetails />
          </div>
        </section>
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;