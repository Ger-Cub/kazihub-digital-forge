
import React from 'react';
import { 
  Clock, 
  Users, 
  MessageSquare, 
  Settings, 
  TrendingDown, 
  Smile, 
  Zap, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const SupportAutomation = () => {
  const services = [
    { icon: Clock, title: 'Gestion Automatisée', desc: 'Automatisation des tâches répétitives et workflows' },
    { icon: Users, title: 'CRM Intelligent', desc: 'Gestion relation client avec IA prédictive' },
    { icon: MessageSquare, title: 'Tickets Automatiques', desc: 'Système de ticketing et résolution automatique' },
    { icon: Settings, title: 'Intégrations API', desc: 'Connexion avec vos outils existants' }
  ];

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.support.title" descriptionKey="seo.support.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] -translate-x-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            Support & Automatisation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            Optimisez votre service client avec des solutions automatisées intelligentes et multilingues
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

        {/* Benefits */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-foreground mb-16 tracking-tight">Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'Réduction des Coûts', desc: 'Diminuez vos coûts de support jusqu\'à 70%', icon: <TrendingDown className="w-10 h-10 text-cosmic-indigo" /> },
              { title: 'Satisfaction Client', desc: 'Réponse instantanée 24h/24, 7j/7', icon: <Smile className="w-10 h-10 text-cosmic-violet" /> },
              { title: 'Efficacité Optimale', desc: 'Automatisation des tâches répétitives', icon: <Zap className="w-10 h-10 text-cosmic-pink" /> },
              { title: 'Évolutivité', desc: 'Solutions qui grandissent avec votre business', icon: <Rocket className="w-10 h-10 text-blue-400" /> }
            ].map((benefit, index) => (
              <div key={index} className="glass-premium p-10 rounded-[2.5rem] border border-white/5 group hover:border-cosmic-indigo/30 transition-colors">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold font-outfit text-foreground mb-4 group-hover:text-cosmic-indigo transition-colors">{benefit.title}</h3>
                <p className="text-cosmic-slate font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-premium p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/10 to-cosmic-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold font-outfit text-foreground mb-6 relative z-10 tracking-tight">Automatisez votre support dès aujourd'hui</h2>
          <p className="text-xl text-cosmic-slate mb-10 relative z-10 font-medium">Découvrez comment nos solutions peuvent transformer votre service client</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link
              to="/#contact"
              className="btn-primary h-16 px-12 text-lg rounded-2xl flex items-center justify-center min-w-[200px] group"
              onClick={scrollToTop}
            >
              <span>Demander une Démo</span>
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="glass-premium h-16 px-12 text-lg rounded-2xl flex items-center justify-center hover:bg-white/5 border-white/10 min-w-[200px]"
              onClick={scrollToTop}
            >
              Voir les Tarifs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportAutomation;
