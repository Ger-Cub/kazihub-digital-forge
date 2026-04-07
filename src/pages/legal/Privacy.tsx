
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cosmic-black text-white selection:bg-cosmic-indigo/30">
      <SEO titleKey="seo.privacy.title" descriptionKey="seo.privacy.description" />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cosmic-indigo/10 rounded-full blur-[120px] translate-x-1/2"></div>

        <div className="relative z-10 glass-card p-10 md:p-16 rounded-[3rem] border border-white/5">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit gradient-text mb-12 tracking-tight">Politique de Confidentialité</h1>

          <div className="space-y-12 text-cosmic-slate font-medium leading-relaxed">
            <section className="group">
              <h2 className="text-2xl font-bold font-outfit text-white mb-6 group-hover:text-cosmic-indigo transition-colors flex items-center">
                <span className="w-8 h-8 rounded-lg bg-cosmic-indigo/20 flex items-center justify-center text-sm mr-4">01</span>
                Collecte des Données
              </h2>
              <p className="mb-6">
                KaziHub Digital Agency collecte les données personnelles suivantes pour assurer un service de haute précision :
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Nom, prénom et coordonnées',
                  'Informations sur votre entreprise',
                  'Données de navigation analytiques',
                  'Communications avec notre équipe'
                ].map((item, i) => (
                  <li key={i} className="flex items-center p-4 glass-premium rounded-xl border border-white/5">
                    <span className="w-2 h-2 bg-cosmic-indigo rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="group">
              <h2 className="text-2xl font-bold font-outfit text-white mb-6 group-hover:text-cosmic-indigo transition-colors flex items-center">
                <span className="w-8 h-8 rounded-lg bg-cosmic-indigo/20 flex items-center justify-center text-sm mr-4">02</span>
                Utilisation des Données
              </h2>
              <p className="mb-6">Vos données sont exploitées pour propulser votre croissance digitale :</p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Fourniture et optimisation des services digitaux',
                  'Amélioration continue de l\'expérience utilisateur',
                  'Communications stratégiques et newsletters',
                  'Conformité aux standards de sécurité globaux'
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 glass-premium rounded-xl border border-white/5">
                    <div className="w-8 h-8 bg-cosmic-indigo/10 rounded flex items-center justify-center mr-4">
                      <span className="text-cosmic-indigo">✦</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="group">
              <h2 className="text-2xl font-bold font-outfit text-white mb-6 group-hover:text-cosmic-indigo transition-colors flex items-center">
                <span className="w-8 h-8 rounded-lg bg-cosmic-indigo/20 flex items-center justify-center text-sm mr-4">03</span>
                Protection des Données
              </h2>
              <p>
                Nous déployons des protocoles de sécurité de pointe, incluant le chiffrement et des audits réguliers, pour garantir l'intégrité absolue de vos actifs numériques.
              </p>
            </section>

            <section className="group">
              <h2 className="text-2xl font-bold font-outfit text-white mb-6 group-hover:text-cosmic-indigo transition-colors flex items-center">
                <span className="w-8 h-8 rounded-lg bg-cosmic-indigo/20 flex items-center justify-center text-sm mr-4">04</span>
                Vos Droits
              </h2>
              <p className="mb-6">Gardez le contrôle total sur votre identité numérique :</p>
              <div className="flex flex-wrap gap-3">
                {['Accès', 'Rectification', 'Effacement', 'Portabilité', 'Opposition'].map((right) => (
                  <span key={right} className="px-4 py-2 glass-premium rounded-full text-sm border border-cosmic-indigo/30 text-white">
                    {right}
                  </span>
                ))}
              </div>
            </section>

            <section className="group p-8 rounded-3xl bg-gradient-to-br from-cosmic-indigo/5 to-cosmic-violet/5 border border-white/5">
              <h2 className="text-2xl font-bold font-outfit text-white mb-4">Contact Sécurité</h2>
              <p className="mb-0">
                Pour toute question relative à vos données :
                <a href="mailto:contact@kazihub.digital" className="text-cosmic-indigo font-bold ml-2 hover:underline">contact@kazihub.digital</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
