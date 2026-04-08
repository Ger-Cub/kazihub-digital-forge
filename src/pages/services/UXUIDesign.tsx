
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Palette, Smartphone, Monitor, Users, Zap, Eye } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

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
    <div className="min-h-screen bg-background text-foreground selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.design.title" descriptionKey="seo.design.description" />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] translate-x-1/2"></div>

        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit gradient-text mb-8 tracking-tight">
            UX/UI Design
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-cosmic-slate max-w-3xl mx-auto font-medium leading-relaxed">
            Créons des expériences utilisateur exceptionnelles adaptées aux réalités africaines
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

        {/* Process */}
        <div className="mb-24 relative z-10">
          <h2 className="text-4xl font-bold font-outfit text-center text-foreground mb-16 tracking-tight">Processus Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: '01', title: 'Recherche', desc: 'Étude des utilisateurs et du marché' },
              { step: '02', title: 'Conception', desc: 'Wireframes et architecture d\'information' },
              { step: '03', title: 'Design', desc: 'Interface visuelle et interactions' },
              { step: '04', title: 'Test', desc: 'Validation et itération' }
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

        {/* CTA Section */}
        <div className="text-center glass-premium p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/10 to-cosmic-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold font-outfit text-foreground mb-6 relative z-10 tracking-tight">Améliorons votre UX ensemble</h2>
          <p className="text-xl text-cosmic-slate mb-10 relative z-10 font-medium">Audit UX gratuit de votre interface actuelle</p>
          <Button className="btn-primary h-16 px-12 text-lg rounded-2xl relative z-10">
            Audit UX Gratuit
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UXUIDesign;
