import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code, Smartphone, Globe, Shield, Zap, Palette } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {t('services.web.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.web.hero.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl">
              <feature.icon className="w-12 h-12 text-kazihub-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">{t('services.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: t('services.process.1.step'), title: t('services.process.1.title'), desc: t('services.process.1.desc') },
              { step: t('services.process.2.step'), title: t('services.process.2.title'), desc: t('services.process.2.desc') },
              { step: t('services.process.3.step'), title: t('services.process.3.title'), desc: t('services.process.3.desc') },
              { step: t('services.process.4.step'), title: t('services.process.4.title'), desc: t('services.process.4.desc') }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-kazihub-dark font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold gradient-text mb-4">{t('services.cta.ready')}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t('services.cta.quote')}</p>
          <Link
            to="/#contact"
            className="btn-primary text-lg px-8 py-3 inline-block"
          >
            {t('services.cta.demo')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
