
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.terms.title" descriptionKey="seo.terms.description" />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cosmic-pink/5 rounded-full blur-[120px] translate-x-1/2"></div>

        <div className="relative z-10 glass-card p-10 md:p-16 rounded-[3rem] border border-white/5">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit gradient-text mb-12 tracking-tight">CGV</h1>

          <div className="space-y-10 text-cosmic-slate font-medium leading-relaxed">
            {[
              { id: '01', title: 'Objet', content: 'Les présentes conditions définissent les protocoles de collaboration pour nos services de pointe : développement, IA, marketing et design.' },
              { id: '02', title: 'Services', content: 'KaziHub Digital Agency déploie des solutions technologiques sur mesure incluant sites web, agents IA autonomes, et stratégies de croissance digitale.' },
              { id: '03', title: 'Commandes', content: 'Chaque projet orbitale débute par une validation de devis, actant l\'adhésion mutuelle à ces standards d\'excellence.' },
              { id: '04', title: 'Prix et Paiement', content: 'Tarification en USD. Structure de paiement par phases : 30% décollage (acompte), 40% navigation, 30% alunissage (livraison).' },
              { id: '05', title: 'Propriété Intellectuelle', content: 'Les actifs créés deviennent votre propriété exclusive après règlement total, avec droit de citation pour notre portfolio.' },
              { id: '06', title: 'Garanties', content: 'Assurance de fonctionnement optimal pendant 90 jours post-livraison, couvrant les corrections nécessaires.' }
            ].map((section) => (
              <section key={section.id} className="group glass-premium p-8 rounded-3xl border border-white/5 hover:border-cosmic-indigo/20 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-cosmic-indigo font-outfit font-bold text-lg mr-4">{section.id}.</span>
                  <h2 className="text-xl font-bold font-outfit text-white group-hover:text-cosmic-indigo transition-colors">{section.title}</h2>
                </div>
                <p className="pl-10">{section.content}</p>
              </section>
            ))}

            <section className="p-8 rounded-3xl bg-gradient-to-br from-cosmic-pink/5 to-cosmic-indigo/5 border border-white/5">
              <h2 className="text-2xl font-bold font-outfit text-white mb-4">Litiges & Juridiction</h2>
              <p>En cas de dissonance orbitale, une résolution amiable est priorisée. À défaut, les tribunaux de Kinshasa font foi.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
