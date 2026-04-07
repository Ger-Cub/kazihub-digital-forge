import React from 'react';
import { SEO } from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ProjectsCarousel from '../components/ProjectsCarousel'; // Import du composant
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO titleKey="seo.home.title" descriptionKey="seo.home.description" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsCarousel /> {/* Ajout du composant ici */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
