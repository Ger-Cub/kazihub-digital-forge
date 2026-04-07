import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: '🌐',
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/web-development'
    },
    {
      icon: '🤖',
      titleKey: 'services.ai.title',
      descKey: 'services.ai.desc',
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-agents'
    },
    {
      icon: '📈',
      titleKey: 'services.marketing.title',
      descKey: 'services.marketing.desc',
      color: 'from-green-500 to-emerald-500',
      link: '/services/digital-marketing'
    },
    {
      icon: '⚡',
      titleKey: 'services.support.title',
      descKey: 'services.support.desc',
      color: 'from-orange-500 to-red-500',
      link: '/services/support-automation'
    },
    {
      icon: '💼',
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc',
      color: 'from-indigo-500 to-purple-500',
      link: '/services/strategic-consulting'
    },
    {
      icon: '🎨',
      titleKey: 'services.design.title',
      descKey: 'services.design.desc',
      color: 'from-pink-500 to-rose-500',
      link: '/services/ux-ui-design'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI/ML', icon: '🧠' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'TailwindCSS', icon: '💨' }
  ];

  return (
    <section id="services" className="py-20 bg-kazihub-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {t(service.titleKey)}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {t(service.descKey)}
              </p>

              <div className="mt-6">
                <Link 
                  to={service.link}
                  onClick={scrollToTop}
                  className="text-kazihub-gold hover:text-kazihub-emerald transition-colors duration-200 font-semibold"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies & Outils</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span key={tech.name} className="glass-effect px-4 py-2 rounded-full text-sm text-kazihub-gold flex items-center gap-2">
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
