import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Headphones, Bot, Clock, Users, MessageSquare, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const SupportAutomation = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Headphones, title: 'Support Client 24/7', desc: 'Service client automatisé disponible en permanence' },
    { icon: Bot, title: 'Chatbots Multilingues', desc: 'Assistants virtuels parlant français, anglais et langues locales' },
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO titleKey="seo.support.title" descriptionKey="seo.support.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Support & Automatisation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimisez votre service client avec des solutions automatisées intelligentes et multilingues
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <service.icon className="w-12 h-12 text-kazihub-emerald mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Réduction des Coûts', desc: 'Diminuez vos coûts de support jusqu\'à 70%' },
              { title: 'Satisfaction Client', desc: 'Réponse instantanée 24h/24, 7j/7' },
              { title: 'Efficacité Optimale', desc: 'Automatisation des tâches répétitives' },
              { title: 'Évolutivité', desc: 'Solutions qui grandissent avec votre business' }
            ].map((benefit, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-kazihub-gold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl bg-gradient-to-r from-kazihub-blue/20 to-kazihub-emerald/20">
          <h2 className="text-3xl font-bold gradient-text mb-4">Automatisez votre support dès aujourd'hui</h2>
          <p className="text-xl text-muted-foreground mb-8">Découvrez comment nos solutions peuvent transformer votre service client</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="btn-primary text-lg px-8 py-3 inline-block"
              onClick={scrollToTop}
            >
              Demander une Démo
            </Link>
            <Link
              to="/pricing"
              className="btn-secondary text-lg px-8 py-3 inline-block"
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
