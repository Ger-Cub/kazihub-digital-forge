
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  BarChart, 
  Compass,
  Building2,
  ShoppingCart,
  CreditCard,
  ArrowUpRight
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

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
    <div className="min-h-screen bg-background text-foreground selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.consulting.title" descriptionKey="seo.consulting.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] translate-x-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            Conseil Stratégique
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            Accompagnement personnalisé pour accélérer votre transformation digitale et maximiser votre impact
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cosmic-indigo/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-cosmic-indigo group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-foreground group-hover:text-cosmic-indigo transition-colors">{service.title}</h3>
              <p className="text-cosmic-slate font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-foreground mb-16 tracking-tight">Notre Méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Diagnostic', desc: 'Analyse complète de votre situation actuelle' },
              { step: '02', title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action personnalisé' },
              { step: '03', title: 'Mise en Œuvre', desc: 'Accompagnement dans l\'implémentation' },
              { step: '04', title: 'Suivi', desc: 'Monitoring et optimisation continue' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cosmic-indigo to-cosmic-violet rounded-3xl rotate-6 group-hover:rotate-0 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-cosmic-indigo/20 transition-transform duration-500">
                  <span className="text-white font-bold font-outfit text-2xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold font-outfit text-foreground mb-3 tracking-wide">{step.title}</h3>
                <p className="text-cosmic-slate font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-foreground mb-16 tracking-tight">Secteurs d'Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'PME & Startups', desc: 'Accompagnement spécialisé pour les jeunes entreprises', icon: <Building2 className="w-10 h-10 text-cosmic-indigo" /> },
              { title: 'E-commerce', desc: 'Stratégies de vente en ligne adaptées à l\'Afrique', icon: <ShoppingCart className="w-10 h-10 text-cosmic-violet" /> },
              { title: 'Services Financiers', desc: 'Digitalisation des services bancaires et fintech', icon: <CreditCard className="w-10 h-10 text-cosmic-pink" /> }
            ].map((sector, index) => (
              <div key={index} className="glass-card p-10 rounded-[2.5rem] text-center border border-white/5 hover:border-cosmic-indigo/30 transition-colors group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold font-outfit text-foreground mb-4 group-hover:text-cosmic-indigo transition-colors">{sector.title}</h3>
                <p className="text-cosmic-slate font-medium leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-premium p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/10 to-cosmic-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold font-outfit text-foreground mb-6 relative z-10 tracking-tight">Prêt à transformer votre entreprise ?</h2>
          <p className="text-xl text-cosmic-slate mb-10 relative z-10 font-medium">Planifiez un audit gratuit avec nos experts</p>
          <Link
            to="/#contact"
            className="btn-primary h-16 px-12 text-lg rounded-2xl relative z-10 inline-flex items-center justify-center group"
          >
            <span>Réserver un Audit Gratuit</span>
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StrategicConsulting;
