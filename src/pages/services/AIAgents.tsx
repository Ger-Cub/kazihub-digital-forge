
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Bot, MessageCircle, Brain, Zap, Users, BarChart, ArrowUpRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

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
    <div className="min-h-screen bg-background text-foreground selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.ai.title" descriptionKey="seo.ai.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-pink/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            {t('services.ai.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            {t('services.ai.hero.subtitle')}
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

        {/* Use Cases */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-foreground mb-16 tracking-tight">{t('services.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'E-commerce', desc: 'Agent pour recommandations produits et gestion commandes' },
              { title: 'Support Client', desc: 'Résolution automatique de 80% des demandes clients' },
              { title: 'Réservations', desc: 'Gestion automatisée des rendez-vous et réservations' },
              { title: 'Formation', desc: 'Tuteurs IA personnalisés pour l\'apprentissage' }
            ].map((useCase, index) => (
              <div key={index} className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-cosmic-indigo/30 transition-colors group">
                <h3 className="text-2xl font-bold font-outfit text-foreground mb-4 group-hover:text-cosmic-indigo transition-colors">{useCase.title}</h3>
                <p className="text-cosmic-slate font-medium leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center glass-premium p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/10 to-cosmic-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold font-outfit text-foreground mb-6 relative z-10 tracking-tight">{t('services.cta.demo')}</h2>
          <p className="text-xl text-cosmic-slate mb-10 relative z-10 font-medium">{t('services.cta.quote')}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link
              to="/#contact"
              className="btn-primary h-16 px-12 text-lg rounded-2xl flex items-center justify-center min-w-[200px] group"
            >
              <span>{t('services.cta.demo')}</span>
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="glass-premium h-16 px-12 text-lg rounded-2xl flex items-center justify-center hover:bg-white/5 border-white/10 min-w-[200px]"
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
