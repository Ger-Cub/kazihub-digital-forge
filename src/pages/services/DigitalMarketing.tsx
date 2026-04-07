
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TrendingUp, Target, Share2, Camera, PenTool, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

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
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <header className="relative overflow-hidden pt-32 pb-24">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cosmic-indigo/20 to-transparent blur-3xl opacity-50"></div>

        <SEO titleKey="seo.marketing.title" descriptionKey="seo.marketing.description" />
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
              Marketing Digital
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
              Boostez votre visibilité et convertissez vos prospects en clients fidèles
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cosmic-indigo/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-cosmic-indigo group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-cosmic-indigo transition-colors">{service.title}</h3>
              <p className="text-cosmic-slate font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            { stat: '300%', label: 'Augmentation trafic moyen', color: 'cosmic-indigo' },
            { stat: '85%', label: 'Taux de conversion amélioré', color: 'cosmic-violet' },
            { stat: '24/7', label: 'Monitoring en continu', color: 'cosmic-pink' }
          ].map((item, index) => (
            <div key={index} className="text-center glass-premium p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-colors">
              <div className={`text-5xl font-bold gradient-text mb-4 font-outfit tracking-tight`}>{item.stat}</div>
              <p className="text-cosmic-slate font-bold uppercase tracking-widest text-xs">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold font-outfit text-center text-white mb-16 tracking-tight">Nos Formules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              <div
                key={index}
                className={`glass-card p-10 rounded-[2.5rem] border ${index === 1 ? 'border-cosmic-indigo/50 shadow-2xl shadow-cosmic-indigo/10' : 'border-white/5'} transition-all duration-500 hover:-translate-y-2`}
              >
                <h3 className="text-2xl font-bold font-outfit text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold font-outfit text-white mb-8">
                  {pkg.price}
                  {pkg.price !== 'Sur mesure' && <span className="text-sm text-cosmic-slate font-medium ml-2">/ mois</span>}
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-cosmic-slate font-medium flex items-center">
                      <span className="w-1.5 h-1.5 bg-cosmic-indigo rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full h-14 rounded-2xl font-bold font-outfit ${index === 1 ? 'btn-primary' : 'glass-premium hover:bg-white/5'}`}>
                  Choisir
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
