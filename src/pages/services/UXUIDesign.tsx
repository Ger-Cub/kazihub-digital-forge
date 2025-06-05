
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Palette, Smartphone, Monitor, Users, Zap, Eye } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UXUIDesign = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Eye, title: 'Recherche UX', desc: 'Analyse des besoins utilisateurs et tests d\'ergonomie' },
    { icon: Palette, title: 'Design UI', desc: 'Interfaces modernes et attrayantes' },
    { icon: Smartphone, title: 'Design Mobile', desc: 'Expériences optimisées pour mobile-first' },
    { icon: Monitor, title: 'Prototypage', desc: 'Maquettes interactives Figma et wireframes' },
    { icon: Users, title: 'Tests Utilisateurs', desc: 'Validation avec de vrais utilisateurs africains' },
    { icon: Zap, title: 'Optimisation UX', desc: 'Amélioration continue de l\'expérience' }
  ];

  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            UX/UI Design
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Créons des expériences utilisateur exceptionnelles adaptées aux réalités africaines
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

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Processus Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Recherche', desc: 'Étude des utilisateurs et du marché' },
              { step: '02', title: 'Conception', desc: 'Wireframes et architecture d\'information' },
              { step: '03', title: 'Design', desc: 'Interface visuelle et interactions' },
              { step: '04', title: 'Test', desc: 'Validation et itération' }
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

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold gradient-text mb-4">Améliorons votre UX ensemble</h2>
          <p className="text-xl text-gray-300 mb-8">Audit UX gratuit de votre interface actuelle</p>
          <Button className="btn-primary text-lg px-8 py-3">
            Audit UX Gratuit
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UXUIDesign;
