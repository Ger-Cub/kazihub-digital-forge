
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

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
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t('about.mission')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: <Target className="w-8 h-8 text-cosmic-indigo" />, key: 'excellence' },
                { icon: <Users className="w-8 h-8 text-cosmic-violet" />, key: 'collaboration' },
                { icon: <Lightbulb className="w-8 h-8 text-cosmic-pink" />, key: 'innovation' },
                { icon: <Globe className="w-8 h-8 text-blue-400" />, key: 'impact' }
              ].map((value) => (
                <div key={value.key} className="glass-card p-6 rounded-2xl group transition-all duration-500">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 transform-gpu">
                    {value.icon}
                  </div>
                  <div className="text-foreground font-bold font-outfit uppercase tracking-wider text-sm">{t(`about.value.${value.key}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project of the Year Card */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/20 to-cosmic-violet/20 blur-3xl group-hover:scale-110 transition-transform duration-700 opacity-50"></div>
            <div className="glass-premium p-10 rounded-[2.5rem] relative z-10 border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl">
              <div className="text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-cosmic-indigo/20 border border-cosmic-indigo/30 text-cosmic-indigo font-bold text-xs uppercase tracking-widest mb-6">
                  {t('about.bestProject.title')}
                </div>

                <div className="w-full aspect-video mx-auto mb-8 rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gradient-to-br from-cosmic-indigo to-cosmic-violet p-1 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-xl overflow-hidden relative">
                    <img
                      src="/projects/geocongo-chat.png"
                      alt="GeoCongo AI Chat Interface"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <h3 className="text-4xl font-bold font-outfit text-foreground mb-4">
                  {t('about.bestProject.name')}
                </h3>

                <p className="text-cosmic-slate leading-relaxed mb-6 font-medium">
                  {t('about.bestProject.desc')}
                </p>

                <div className="text-sm text-foreground/60 mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                  {t('about.bestProject.features')}
                </div>

                <a
                  href="https://geocongoai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full group"
                >
                  <span>{t('about.bestProject.cta')}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
