import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Target, TrendingUp, Users, Lightbulb, BarChart, Compass } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const StrategicConsulting = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Compass, title: 'Transformation Digitale', desc: 'Stratégie complète de digitalisation de votre entreprise' },
    { icon: Target, title: 'Audit Digital', desc: 'Analyse approfondie de votre présence numérique' },
    { icon: TrendingUp, title: 'Stratégie de Croissance', desc: 'Plans de développement adaptés au marché africain' },
    { icon: Users, title: 'Formation Équipes', desc: 'Coaching et formation de vos équipes aux outils digitaux' },
    { icon: Lightbulb, title: 'Innovation Conseil', desc: 'Accompagnement dans l\'adoption de nouvelles technologies' },
    { icon: BarChart, title: 'Optimisation ROI', desc: 'Maximisation du retour sur investissement digital' }
  ];

  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Conseil Stratégique
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accompagnement personnalisé pour accélérer votre transformation digitale et maximiser votre impact
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <service.icon className="w-12 h-12 text-kazihub-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Notre Méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnostic', desc: 'Analyse complète de votre situation actuelle' },
              { step: '02', title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action personnalisé' },
              { step: '03', title: 'Mise en Œuvre', desc: 'Accompagnement dans l\'implémentation' },
              { step: '04', title: 'Suivi', desc: 'Monitoring et optimisation continue' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-kazihub-dark font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Secteurs d'Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'PME & Startups', desc: 'Accompagnement spécialisé pour les jeunes entreprises' },
              { title: 'E-commerce', desc: 'Stratégies de vente en ligne adaptées à l\'Afrique' },
              { title: 'Services Financiers', desc: 'Digitalisation des services bancaires et fintech' }
            ].map((sector, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-kazihub-emerald mb-3">{sector.title}</h3>
                <p className="text-gray-300">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold gradient-text mb-4">Prêt à transformer votre entreprise ?</h2>
          <p className="text-xl text-gray-300 mb-8">Planifiez un audit gratuit avec nos experts</p>
          <Link 
            to="/#contact" 
            className="btn-primary text-lg px-8 py-3 inline-block"
          >
            Réserver un Audit Gratuit
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StrategicConsulting;
