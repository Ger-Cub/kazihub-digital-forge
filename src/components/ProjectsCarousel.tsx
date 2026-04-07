import React, { useRef } from 'react';

const ProjectsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    { name: 'E-commerce Platform', image: '/lovable-uploads/ecommerce.jpg' },
    { name: 'AI Chatbot', image: '/lovable-uploads/ai-chatbot.png' },
    { name: 'Mobile App', image: '/lovable-uploads/mobile-app.png' },
    { name: 'CRM System', image: '/lovable-uploads/crm-system.webp' },
    { name: 'Marketing Dashboard', image: '/lovable-uploads/marketing-dashboard.jpg' }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="animate-fade-in text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit gradient-text mb-4">Nos Réalisations</h2>
            <p className="text-cosmic-slate font-medium max-w-xl">Découvrez comment nous transformons les idées en solutions digitales exceptionnelles.</p>
          </div>

          {/* Boutons de navigation */}
          <div className="flex space-x-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 glass-premium text-white flex items-center justify-center rounded-xl hover:bg-cosmic-indigo transition-all duration-300 shadow-lg group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">◀</span>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 glass-premium text-white flex items-center justify-center rounded-xl hover:bg-cosmic-indigo transition-all duration-300 shadow-lg group"
            >
              <span className="group-hover:translate-x-1 transition-transform">▶</span>
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex items-stretch space-x-8 overflow-x-hidden scrollbar-hide py-4"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[320px] md:min-w-[400px] flex-shrink-0 glass-card p-4 rounded-[2rem] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] mb-6 aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-bold font-outfit tracking-wider uppercase text-xs">Voir le projet</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-outfit text-white px-2 group-hover:text-cosmic-indigo transition-colors">{project.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;