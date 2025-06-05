
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code, Smartphone, Globe, Shield, Zap, Palette } from 'lucide-react';
import { Button } from '../../components/ui/button';

const WebDevelopment = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Globe, title: 'Sites Vitrines', desc: 'Sites web professionnels pour présenter votre activité' },
    { icon: Code, title: 'E-commerce', desc: 'Boutiques en ligne sécurisées et performantes' },
    { icon: Smartphone, title: 'Applications Mobiles', desc: 'Apps natives et web progressives' },
    { icon: Shield, title: 'Sécurité', desc: 'Protection SSL et sécurisation des données' },
    { icon: Zap, title: 'Performance', desc: 'Sites ultra-rapides et optimisés SEO' },
    { icon: Palette, title: 'Design Moderne', desc: 'Interface utilisateur intuitive et élégante' }
  ];

  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Développement Web & Mobile
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Créons ensemble des solutions web modernes, performantes et adaptées à vos besoins business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl">
              <feature.icon className="w-12 h-12 text-kazihub-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'Étude de vos besoins et objectifs' },
              { step: '02', title: 'Design', desc: 'Création de maquettes et prototypes' },
              { step: '03', title: 'Développement', desc: 'Codage et intégration des fonctionnalités' },
              { step: '04', title: 'Déploiement', desc: 'Mise en ligne et formation' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-kazihub-dark font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold gradient-text mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-gray-300 mb-8">Contactez-nous pour un devis gratuit</p>
          <Button className="btn-primary text-lg px-8 py-3">
            Demander un Devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
