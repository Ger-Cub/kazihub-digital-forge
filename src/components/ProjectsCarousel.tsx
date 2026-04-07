import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsCarousel = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: 'GeoCongo AI',
      image: '/projects/geocongo-map.png',
      category: 'Intelligence Artificielle',
      link: 'https://geocongoai.com'
    },
    {
      name: 'E-commerce Platform',
      image: '/lovable-uploads/ecommerce.jpg',
      category: 'Développement Web'
    },
    {
      name: 'AI Chatbot',
      image: '/lovable-uploads/ai-chatbot.png',
      category: 'Automation'
    },
    {
      name: 'Mobile App',
      image: '/lovable-uploads/mobile-app.png',
      category: 'Développement Mobile'
    },
    {
      name: 'CRM System',
      image: '/lovable-uploads/crm-system.webp',
      category: 'Software Architecture'
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmic-pink/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="animate-fade-in max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold font-outfit gradient-text mb-6">Nos Réalisations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet rounded-full mb-6"></div>
            <p className="text-xl text-cosmic-slate font-medium">
              Découvrez comment nous fusionnons l'innovation technologique et le design de pointe pour créer des expériences numériques qui redéfinissent le marché africain.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 glass-premium text-white flex items-center justify-center rounded-2xl hover:bg-cosmic-indigo transition-all duration-300 shadow-xl group border border-white/5 active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 glass-premium text-white flex items-center justify-center rounded-2xl hover:bg-cosmic-indigo transition-all duration-300 shadow-xl group border border-white/5 active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex items-stretch space-x-6 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4 snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[420px] flex-shrink-0 snap-start"
              >
                <div className="glass-card p-4 rounded-3xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-xl relative h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 bg-cosmic-black shadow-inner flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 grayscale-[10%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-10 h-10 glass-premium rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-cosmic-indigo scale-75 group-hover:scale-100 shadow-2xl"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-cosmic-indigo/80 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-1 flex-grow">
                    <h3 className="text-xl font-bold font-outfit text-white mb-2 group-hover:text-cosmic-indigo transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-white/10 group-hover:w-16 group-hover:bg-cosmic-indigo transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;