import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49 / mois',
      features: [
        'Support client automatisé 24/7',
        'Chatbots multilingues',
        'Gestion des tickets',
        'Intégrations API de base'
      ],
      buttonText: 'Commencer',
      buttonLink: '/#contact'
    },
    {
      name: 'Pro',
      price: '$99 / mois',
      features: [
        'Toutes les fonctionnalités Starter',
        'CRM intelligent avec IA prédictive',
        'Automatisation avancée des workflows',
        'Intégrations API personnalisées'
      ],
      buttonText: 'Essayer Pro',
      buttonLink: '/#contact'
    },
    {
      name: 'Entreprise',
      price: 'Sur mesure',
      features: [
        'Solutions adaptées à vos besoins',
        'Accompagnement dédié',
        'Évolutivité pour grandes entreprises',
        'Support prioritaire'
      ],
      buttonText: 'Contactez-nous',
      buttonLink: '/#contact'
    }
  ];

  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Tarifs & Abonnements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez le plan qui convient le mieux à votre entreprise et commencez à automatiser dès aujourd'hui.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-kazihub-gold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
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