import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Bot, MessageCircle, Brain, Zap, Users, BarChart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const { t } = useLanguage();

  const services = [
    { icon: MessageCircle, title: 'Chatbots Intelligents', desc: t('pricing.starter.feature1') },
    { icon: Bot, title: 'Assistants IA', desc: t('pricing.pro.feature3') },
    { icon: Brain, title: t('services.ai.title'), desc: t('services.ai.desc') },
    { icon: Users, title: 'Support Multilingue', desc: t('pricing.starter.feature2') },
    { icon: BarChart, title: 'Analytics IA', desc: 'Analyse prédictive de vos données' },
    { icon: Zap, title: 'Intégration Rapide', desc: 'Déploiement en quelques jours' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {t('services.ai.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.ai.hero.subtitle')}
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

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">{t('services.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'E-commerce', desc: 'Agent pour recommandations produits et gestion commandes' },
              { title: 'Support Client', desc: 'Résolution automatique de 80% des demandes clients' },
              { title: 'Réservations', desc: 'Gestion automatisée des rendez-vous et réservations' },
              { title: 'Formation', desc: 'Tuteurs IA personnalisés pour l\'apprentissage' }
            ].map((useCase, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-kazihub-gold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center glass-effect p-8 rounded-2xl bg-gradient-to-r from-kazihub-blue/20 to-kazihub-emerald/20">
          <h2 className="text-3xl font-bold gradient-text mb-4">{t('services.cta.demo')}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t('services.cta.quote')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              {t('services.cta.demo')}
            </Link>
            <Link
              to="/pricing"
              className="btn-secondary text-lg px-8 py-3 inline-block"
            >
              {t('nav.portfolio')}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIAgents;
