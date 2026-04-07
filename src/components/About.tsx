
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cosmic-indigo/5 rounded-full blur-[100px] -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-outfit gradient-text mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-cosmic-slate font-bold uppercase tracking-[0.2em]">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-xl text-cosmic-slate leading-relaxed font-medium">
              {t('about.description')}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {t('about.mission')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { emoji: '🎯', key: 'excellence' },
                { emoji: '🤝', key: 'collaboration' },
                { emoji: '💡', key: 'innovation' },
                { emoji: '🌍', key: 'impact' }
              ].map((value) => (
                <div key={value.key} className="glass-card p-6 rounded-2xl group transition-all duration-500">
                  <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 transform-gpu">{value.emoji}</div>
                  <div className="text-white font-bold font-outfit uppercase tracking-wider text-sm">{t(`about.value.${value.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Card */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/20 to-cosmic-violet/20 blur-3xl group-hover:scale-110 transition-transform duration-700 opacity-50"></div>
            <div className="glass-premium p-10 rounded-[2.5rem] relative z-10 border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gradient-to-br from-cosmic-indigo to-cosmic-violet p-1.5 shadow-2xl">
                  <img
                    src="/lovable-uploads/ceo-modern-v2.png"
                    alt={t('about.founder')}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-3xl font-bold font-outfit text-white mb-2">
                  {t('about.founder')}
                </h3>
                <p className="text-cosmic-indigo font-bold uppercase tracking-widest text-sm mb-6">
                  {t('about.founder.title')}
                </p>
                <p className="text-cosmic-slate leading-relaxed mb-8 italic">
                  "{t('about.founder.bio')}"
                </p>

                {/* Social links */}
                <div className="flex justify-center space-x-5">
                  {[
                    { icon: '💼', link: '#' },
                    { icon: '🐙', link: '#' },
                    { icon: '✉️', link: '#' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-12 h-12 glass-premium rounded-full flex items-center justify-center hover:bg-cosmic-indigo transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
