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
    <div className="relative bg-kazihub-dark py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center gradient-text mb-8">Nos Réalisations</h2>
      <div className="relative">
        {/* Boutons de navigation */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-kazihub-gold text-white p-2 rounded-full shadow-lg hover:bg-kazihub-emerald transition z-10"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-kazihub-gold text-white p-2 rounded-full shadow-lg hover:bg-kazihub-emerald transition z-10"
        >
          ▶
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex items-center space-x-8 overflow-x-hidden scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-lg font-semibold text-white mt-4 text-center">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;