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
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-outfit gradient-text mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl -mr-16 -mt-16 rounded-full group-hover:scale-150 transform transition-transform duration-700"></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3 className="text-2xl font-bold font-outfit text-white mb-4 group-hover:text-cosmic-indigo transition-colors duration-300">
                {t(service.titleKey)}
              </h3>

              <p className="text-cosmic-slate leading-relaxed mb-8 font-medium">
                {t(service.descKey)}
              </p>

              <div className="mt-auto">
                <Link
                  to={service.link}
                  onClick={scrollToTop}
                  className="inline-flex items-center text-cosmic-indigo hover:text-cosmic-pink transition-all duration-300 font-bold uppercase tracking-widest text-xs gap-2 group/link"
                >
                  {t('services.more')}
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-32 text-center animate-fade-in">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-12">
            {t('services.tech.title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="glass-premium px-6 py-3 rounded-2xl text-sm font-bold text-cosmic-slate flex items-center gap-3 hover:bg-white/5 hover:text-white hover:scale-105 transition-all duration-300 border border-white/5"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{tech.icon}</span>
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
