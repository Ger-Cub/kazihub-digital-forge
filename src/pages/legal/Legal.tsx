
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

const Legal = () => {
  return (
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.legal.title" descriptionKey="seo.legal.description" />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] -translate-x-1/2"></div>

        <div className="relative z-10 glass-card p-10 md:p-16 rounded-[3rem] border border-white/5">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit gradient-text mb-12 tracking-tight">Mentions Légales</h1>

          <div className="space-y-12 text-cosmic-slate font-medium leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section className="glass-premium p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold font-outfit text-white mb-4 flex items-center">
                  <span className="w-2 h-6 bg-cosmic-indigo rounded-full mr-3"></span>
                  Éditeur du Site
                </h2>
                <p>
                  <strong className="text-white font-bold block mb-2 text-lg">KaziHub Digital Agency</strong>
                  Agence de création numérique<br />
                  Kinshasa, RDC<br />
                  <a href="mailto:contact@kazihub.digital" className="text-cosmic-indigo hover:underline">contact@kazihub.digital</a><br />
                  +243 991 102 448
                </p>
              </section>

              <section className="glass-premium p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold font-outfit text-white mb-4 flex items-center">
                  <span className="w-2 h-6 bg-cosmic-violet rounded-full mr-3"></span>
                  Direction
                </h2>
                <p>
                  <strong className="text-white font-bold block mb-2 text-lg">Gerard Cubaka</strong>
                  Fondateur & CEO<br />
                  Visionnaire Digital
                </p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-white mb-6">Hébergement & Infrastructure</h2>
              <p className="mb-6">Nos infrastructures reposent sur des leaders mondiaux garantissant une disponibilité de 99.9% :</p>
              <div className="flex flex-wrap gap-4">
                {['Hostinger', 'Vercel', 'GitHub'].map(host => (
                  <div key={host} className="px-6 py-3 glass-premium rounded-xl border border-white/10 font-bold text-white">
                    {host}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-white mb-6">Propriété Intellectuelle</h2>
              <p>
                L'architecture visuelle, les algorithmes et les contenus de cette plateforme sont protégés par les lois internationales sur la propriété intellectuelle. Toute reproduction non autorisée constitue une dérive hors orbite légale.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-premium p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold font-outfit text-white mb-4">Données</h2>
                <p className="text-sm">Conservées pendant 3 ans pour l'optimisation de nos relations commerciales.</p>
              </div>
              <div className="glass-premium p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold font-outfit text-white mb-4">Cookies</h2>
                <p className="text-sm">Utilisés exclusivement pour affiner votre trajectoire sur notre interface.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
