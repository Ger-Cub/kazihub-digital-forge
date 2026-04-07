
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TrendingUp, Target, Share2, Camera, PenTool, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DigitalMarketing = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Target, title: 'SEO/SEA', desc: 'Optimisation et publicité sur moteurs de recherche' },
    { icon: Share2, title: 'Réseaux Sociaux', desc: 'Gestion complète de vos médias sociaux' },
    { icon: Camera, title: 'Création Contenu', desc: 'Visuels, vidéos et textes engageants' },
    { icon: PenTool, title: 'Design Graphique', desc: 'Identité visuelle et supports marketing' },
    { icon: BarChart3, title: 'Analytics', desc: 'Suivi performance et ROI détaillé' },
    { icon: TrendingUp, title: 'Growth Hacking', desc: 'Stratégies de croissance rapide' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Marketing Digital & Réseaux Sociaux
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boostez votre visibilité et convertissez vos prospects en clients fidèles
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <service.icon className="w-12 h-12 text-kazihub-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { stat: '300%', label: 'Augmentation trafic moyen' },
            { stat: '85%', label: 'Taux de conversion amélioré' },
            { stat: '24/7', label: 'Monitoring en continu' }
          ].map((item, index) => (
            <div key={index} className="text-center glass-effect p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">{item.stat}</div>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Nos Formules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter', 
                price: '150€', 
                features: ['Audit SEO', 'Gestion 2 réseaux', 'Rapport mensuel', 'Support email']
              },
              { 
                name: 'Pro', 
                price: '350€', 
                features: ['Tout Starter +', 'Campagnes pub', 'Création contenu', 'Analytics avancés', 'Support prioritaire']
              },
              { 
                name: 'Enterprise', 
                price: 'Sur mesure', 
                features: ['Tout Pro +', 'Stratégie personnalisée', 'Dédié account manager', 'Formation équipe']
              }
            ].map((pkg, index) => (
              <div key={index} className={`glass-effect p-6 rounded-2xl ${index === 1 ? 'border-2 border-kazihub-gold' : ''}`}>
                <h3 className="text-2xl font-bold text-kazihub-gold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-4">{pkg.price}<span className="text-lg text-muted-foreground">/mois</span></div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground">✓ {feature}</li>
                  ))}
                </ul>
                <Button className="btn-primary w-full">Choisir</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
