import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-kazihub-gold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-foreground mb-6">{plan.price}</p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="text-kazihub-emerald mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.buttonLink}
                className="btn-primary text-lg px-8 py-3 inline-block"
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