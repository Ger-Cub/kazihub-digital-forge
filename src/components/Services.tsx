import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Bot, 
  TrendingUp, 
  Zap, 
  Briefcase, 
  Palette, 
  ExternalLink 
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/web-development'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      titleKey: 'services.ai.title',
      descKey: 'services.ai.desc',
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-agents'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      titleKey: 'services.marketing.title',
      descKey: 'services.marketing.desc',
      color: 'from-green-500 to-emerald-500',
      link: '/services/digital-marketing'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      titleKey: 'services.support.title',
      descKey: 'services.support.desc',
      color: 'from-orange-500 to-red-500',
      link: '/services/support-automation'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc',
      color: 'from-indigo-500 to-purple-500',
      link: '/services/strategic-consulting'
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      titleKey: 'services.design.title',
      descKey: 'services.design.desc',
      color: 'from-pink-500 to-rose-500',
      link: '/services/ux-ui-design'
    }
  ];

  const technologies = [
    { 
      name: 'React', 
      color: 'text-[#61DAFB]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.32 10.648a.504.504 0 0 0-.197-.199 13.81 13.81 0 0 0-8.133-2.541l.534-1.928a.506.506 0 0 0-.147-.51.503.503 0 0 0-.514-.083 13.045 13.045 0 0 0-5.405 3.393l-1.847-.736a.502.502 0 0 0-.544.137.502.502 0 0 0-.056.547l1.011 2.31a13.43 13.43 0 0 0-4.321 5.048.503.503 0 0 0 .19.646.503.503 0 0 0 .647-.19 12.43 12.43 0 0 1 3.996-4.667l.833 1.902a.502.502 0 0 0 .462.302.5.5 0 0 0 .193-.039 13.018 13.018 0 0 1 5.313-3.238l-.49 1.77a.5.5 0 0 0 .145.505.503.503 0 0 0 .513.084 13.843 13.843 0 0 1 8.212 2.56.503.503 0 0 0 .692-.132.504.504 0 0 0-.131-.693zM12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z"/></svg> 
    },
    { 
      name: 'TypeScript', 
      color: 'text-[#3178C6]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.148c-.449-.13-.967-.196-1.554-.196-.545 0-.974.145-1.285.434-.312.288-.468.73-.468 1.325V24h-2.415V9.883h2.259v1.595c.188-.539.493-.962.912-1.269.419-.307.926-.459 1.524-.459zM11.65 9.883v2.148H9.176v11.969H6.761V12.031H4.287V9.883h7.363z"/></svg> 
    },
    { 
      name: 'Node.js', 
      color: 'text-[#339933]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.444 11.233V8.815l2.096-1.211V10.02l-2.096 1.213zm-2.444 1.411l-2.096-1.211V8.16l2.096 1.211v3.273zm2.444 4.091v-2.418l2.096-1.21v2.417l-2.096 1.211zm-4.888-2.822l-2.096-1.211V9.431l2.096 1.211v3.272zm0 5.502l-2.096-1.211V16.35l2.096 1.211v3.272zm9.513-13.843l-.11.06-10.13-5.85a.49.49 0 0 0-.25-.43V.49a.49.49 0 0 0-.25-.43L12.33 0a.49.49 0 0 0-.49 0L1.71 5.85a.49.49 0 0 0-.25.43v11.56a.49.49 0 0 0 .25.43l10.13 5.85a.49.49 0 0 0 .38-.27l10.13-5.85a.49.49 0 0 0 .25-.43V6.28a.49.49 0 0 0-.25-.43l-.11.06z"/></svg> 
    },
    { 
      name: 'Python', 
      color: 'text-[#3776AB]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5h-1.44V2.13l-.14-.31-.23-.24-.32-.18-.41-.12-.5-.07h-.57l-.41.03-.36.07-.32.11-.28.16-.21.21-.15.28-.09.32-.05.37V9.07h1.41V10.5H9.33V4.54l.02-.3.05-.28.1-.26.13-.23.18-.19.23-.16.28-.11.32-.07.37-.03h.45zm-6.82 4.05l.08.76.2.66.33.54.42.42.51.3.58.19.61.1.61.03h.58l.53-.04.45-.1.37-.17.29-.25.19-.34.1-.42.02-.51V3.41h1.44v6.22l-.02.5-.1.48-.17.44-.24.39-.3.32-.36.24-.41.15-.45.07h-.48l-.51-.03-.49-.1-.47-.16-.43-.24-.38-.32-.31-.39-.24-.44-.15-.48-.1-.5-.02-.51V4.23zM1.5 10.5h1.44V15.77l.02.3.05.28.1.26.13.23.18.19.23.16.28.11.32.07.37.03h.45l.41-.03.36-.07.32-.11.28-.16.21-.21.15-.28.09-.32.05-.37V10.5H10.5V16.43l-.02.5-.1.48-.17.44-.24.39-.3.32-.36.24-.41.15-.45.07h-.48l-.51-.03-.49-.1-.47-.16-.43-.24-.38-.32-.31-.39-.24-.44-.15-.48-.1-.5-.02-.51V10.5z"/></svg> 
    },
    { 
      name: 'Figma', 
      color: 'text-[#F24E1E]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8.5 19a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM5 8.5c0-1.933 1.567-3.5 3.5-3.5L12 5v7H8.5A3.5 3.5 0 0 1 5 8.5zm7-3.5c1.933 0 3.5 1.567 3.5 3.5S13.933 12 12 12V5zm3.5 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5H12v-7h3.5zM12 12v7c-1.933 0-3.5-1.567-3.5-3.5S10.067 12 12 12z"/></svg> 
    },
    { 
      name: 'TailwindCSS', 
      color: 'text-[#06B6D4]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> 
    },
    { 
      name: 'Supabase', 
      color: 'text-[#3ECF8E]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.362 9.354H12V.348a.342.342 0 0 0-.543-.279L2.146 6.649a.342.342 0 0 0-.012.548L12.638 14.646H21.362a.342.342 0 0 0 .342-.342V9.696a.342.342 0 0 0-.342-.342zM2.638 14.646H12v9.006a.342.342 0 0 0 .543.279l9.311-6.58a.342.342 0 0 0 .012-.548L11.362 9.354H2.638a.342.342 0 0 0-.342.342v4.608a.342.342 0 0 0 .342.342z"/></svg> 
    },
    { 
      name: 'Docker', 
      color: 'text-[#2496ED]', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.043c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM11.283 11.078h2.119c.102 0 .186-.084.186-.186V9.043c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM11.283 8.326h2.119c.102 0 .186-.084.186-.186V6.291c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM8.583 11.078h2.119c.102 0 .186-.084.186-.186V9.043c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM8.583 8.326h2.119c.102 0 .186-.084.186-.186V6.291c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM8.583 5.574h2.119c.102 0 .186-.084.186-.186V3.539c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM5.883 11.078h2.119c.102 0 .186-.084.186-.186V9.043c0-.102-.084-.186-.186-.186H5.883c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM2.183 11.078H4.3c.102 0 .186-.084.186-.186V9.043c0-.102-.084-.186-.186-.186h-2.117c-.102 0-.186.084-.186.186v1.849c0 .102.084.186.186.186zM12.055 13.903c-3.211 0-5.815 2.148-5.815 4.8s2.604 4.8 5.815 4.8c3.211 0 5.815-2.148 5.815-4.8 0-4.52-2.062-4.8-5.815-4.8z"/></svg> }
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

              <h3 className="text-2xl font-bold font-outfit text-foreground mb-4 group-hover:text-cosmic-indigo transition-colors duration-300">
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
        <div className="mt-32 text-center animate-fade-in overflow-hidden relative">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/40 mb-12">
            {t('services.tech.title')}
          </h3>
          
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap gap-12">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="glass-premium px-8 py-4 rounded-2xl text-lg font-bold text-cosmic-slate flex items-center gap-4 hover:bg-white/5 hover:text-foreground transition-all duration-300 border border-white/5 min-w-max"
                >
                  <span className={`${tech.color} group-hover:scale-110 transition-transform`}>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
