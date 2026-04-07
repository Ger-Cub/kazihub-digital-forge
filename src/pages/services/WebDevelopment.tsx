import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code, Smartphone, Globe, Shield, Zap, Palette } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const WebDevelopment = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Globe, title: t('services.web.feature1.title'), desc: t('services.web.feature1.desc') },
    { icon: Code, title: t('services.web.feature2.title'), desc: t('services.web.feature2.desc') },
    { icon: Smartphone, title: t('services.web.feature3.title'), desc: t('services.web.feature3.desc') },
    { icon: Shield, title: t('services.design.title'), desc: t('services.design.desc') },
    { icon: Zap, title: t('services.support.title'), desc: t('services.support.desc') },
    { icon: Palette, title: t('services.design.title'), desc: t('services.design.desc') }
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.web.title" descriptionKey="seo.web.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] -translate-x-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            {t('services.web.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            {t('services.web.hero.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cosmic-indigo/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-cosmic-indigo group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-cosmic-indigo transition-colors">{feature.title}</h3>
              <p className="text-cosmic-slate font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-white mb-16 tracking-tight">{t('services.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: t('services.process.1.step'), title: t('services.process.1.title'), desc: t('services.process.1.desc') },
              { step: t('services.process.2.step'), title: t('services.process.2.title'), desc: t('services.process.2.desc') },
              { step: t('services.process.3.step'), title: t('services.process.3.title'), desc: t('services.process.3.desc') },
              { step: t('services.process.4.step'), title: t('services.process.4.title'), desc: t('services.process.4.desc') }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cosmic-indigo to-cosmic-violet rounded-3xl rotate-6 group-hover:rotate-0 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-cosmic-indigo/20 transition-transform duration-500">
                  <span className="text-white font-bold font-outfit text-2xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold font-outfit text-white mb-3 tracking-wide">{process.title}</h3>
                <p className="text-cosmic-slate font-medium">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-premium p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/10 to-cosmic-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold font-outfit text-white mb-6 relative z-10 tracking-tight">{t('services.cta.ready')}</h2>
          <p className="text-xl text-cosmic-slate mb-10 relative z-10 font-medium">{t('services.cta.quote')}</p>
          <Link
            to="/#contact"
            className="btn-primary h-16 px-12 text-lg rounded-2xl relative z-10 inline-flex items-center justify-center"
          >
            <span>{t('services.cta.demo')}</span>
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
