import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectsCarousel = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: 'GeoCongo AI',
      description: 'Plateforme d\'intelligence géospatiale pour la gestion des ressources naturelles en RDC.',
      image: '/projects/geocongo-map.png',
      category: 'Intelligence Artificielle',
      link: 'https://geocongoai.com'
    },
    {
      name: 'Venus Consulting',
      description: "Solutions stratégiques en Géosciences, Ingénierie Minière & Forage Hydraulique. De l'étude à la réalisation, avec précision.",
      image: '/projects/venus-consulting.png',
      category: 'Engineering & Consulting',
      link: 'https://www.venusconsultingvc.com/'
    },
    {
      name: 'Yetubook',
      description: 'Assistant virtuel intelligent spécialisé dans le service client automatisé en lingala et français.',
      image: '/lovable-uploads/ai-chatbot.png',
      category: 'Automation',
      link: 'https://capston-project-ger-cub.vercel.app/'
    },
    {
      name: 'RelaxApp',
      description: 'Application mobile de transport sécurisé avec suivi en temps réel et alertes d\'urgence.',
      image: '/lovable-uploads/mobile-app.png',
      category: 'Développement Mobile',
      link: 'https://relaxenglishapp.vercel.app/'
    },
    {
      name: 'Gerard AI Trading',
      description: 'Plateforme d\'automatisation du trading avec l\'IA sur l\'API Binance. Marché en direct, suivi PnL et agents IA intégrés.',
      image: '/projects/gerard-ai-trading.png',
      category: 'Intelligence Artificielle',
      link: 'https://gerardaitrading.vercel.app/'
    },
    {
      name: 'HexaShop',
      description: 'Solution e-commerce multivendeur optimisée pour les paiements mobiles locaux.',
      image: '/lovable-uploads/ecommerce.jpg',
      category: 'Développement Web',
      link: '#'
    }
  ];

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Update active index based on scroll position
      const index = Math.round(scrollLeft / (420 + 24)); // card width + gap
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth > 768 ? 444 : 324; // Width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmic-pink/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cosmic-indigo/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

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
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "w-14 h-14 glass-premium text-foreground flex items-center justify-center rounded-2xl transition-all duration-300 shadow-xl group border border-white/5 active:scale-95",
                !canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-cosmic-indigo hover:text-white"
              )}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "w-14 h-14 glass-premium text-foreground flex items-center justify-center rounded-2xl transition-all duration-300 shadow-xl group border border-white/5 active:scale-95",
                !canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:bg-cosmic-indigo hover:text-white"
              )}
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex items-stretch space-x-6 overflow-x-auto py-12 px-4 -mx-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[420px] flex-shrink-0 snap-start h-full"
              >
                <div className="glass-card p-4 rounded-3xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-premium hover:shadow-premium-hover relative h-[460px] flex flex-col">
                  <div className="relative overflow-hidden rounded-2xl w-full h-64 mb-5 bg-background shadow-inner flex-shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.category}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-12 h-12 glass-premium rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-cosmic-indigo scale-75 group-hover:scale-100 shadow-2xl z-10"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-cosmic-indigo/90 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold font-outfit text-foreground mb-2 group-hover:text-cosmic-indigo transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-cosmic-slate text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 overflow-hidden">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="w-8 h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet rounded-full group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const scrollAmount = carouselRef.current?.clientWidth > 768 ? 444 : 324;
                  carouselRef.current?.scrollTo({
                    left: index * scrollAmount,
                    behavior: 'smooth'
                  });
                }}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  activeIndex === index
                    ? "w-12 bg-cosmic-indigo"
                    : "w-2 bg-cosmic-indigo/20 hover:bg-cosmic-indigo/40"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;