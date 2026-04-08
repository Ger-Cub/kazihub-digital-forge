import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-cosmic-indigo/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-cosmic-violet/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] bg-cosmic-pink/10 rounded-full blur-[100px] animate-pulse-very-slow"></div>
      </div>

      {/* Grid Pattern Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Badge */}
          <div className="glass-premium px-4 py-1.5 rounded-full text-xs font-bold text-cosmic-indigo uppercase tracking-[0.2em] mb-8">
            Innovation & Craftsmanship
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-outfit tracking-tight max-w-5xl">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cosmic-slate mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.quote')}
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-3xl group">
              <div className="text-4xl font-bold font-outfit text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-cosmic-slate">{t('hero.stats.experience')}</div>
            </div>
            <div className="glass-card p-8 rounded-3xl group">
              <div className="text-4xl font-bold font-outfit text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-cosmic-slate">{t('hero.stats.projects')}</div>
            </div>
            <div className="glass-card p-8 rounded-3xl group">
              <div className="text-4xl font-bold font-outfit text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-sm font-bold uppercase tracking-widest text-cosmic-slate">{t('hero.stats.response')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cosmic-slate font-bold">Scroll</span>
        <div className="w-1 h-12 bg-gradient-to-b from-cosmic-indigo to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
