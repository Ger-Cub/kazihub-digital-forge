import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4')
      ],
      buttonText: t('pricing.cta.start'),
      buttonLink: '/#contact'
    },
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      features: [
        t('pricing.pro.feature1'),
        t('pricing.pro.feature2'),
        t('pricing.pro.feature3'),
        t('pricing.pro.feature4')
      ],
      buttonText: t('pricing.cta.try'),
      buttonLink: '/#contact'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4')
      ],
      buttonText: t('pricing.cta.contact'),
      buttonLink: '/#contact'
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.pricing.title" descriptionKey="seo.pricing.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-violet/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            {t('pricing.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-10 rounded-[2.5rem] flex flex-col items-center hover:-translate-y-2 transition-all duration-500 group ${index === 1 ? 'border-cosmic-indigo/30 shadow-2xl shadow-cosmic-indigo/10' : 'border-white/5'}`}
            >
              {index === 1 && (
                <div className="bg-cosmic-indigo text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-6 shadow-glow">
                  Recommandé
                </div>
              )}
              <h3 className="text-2xl font-bold font-outfit text-white mb-4 group-hover:text-cosmic-indigo transition-colors">{plan.name}</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-bold font-outfit text-white tracking-tight">{plan.price}</span>
              </div>
              <ul className="w-full text-cosmic-slate mb-12 space-y-5 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium">
                    <div className="w-5 h-5 bg-cosmic-indigo/20 text-cosmic-indigo rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.buttonLink}
                className={`w-full py-5 rounded-2xl font-bold font-outfit text-center transition-all duration-300 ${index === 1 ? 'btn-primary' : 'glass-premium hover:bg-white/5 border-white/10'}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;