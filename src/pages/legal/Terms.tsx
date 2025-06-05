
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Conditions Générales de Vente</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Présentation</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre KaziHub Digital Agency et ses clients pour la fourniture de services de développement web, intelligence artificielle et marketing digital.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p className="mb-4">KaziHub Digital Agency propose :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Développement de sites web et applications mobiles</li>
              <li>Création d'agents IA personnalisés</li>
              <li>Services de marketing digital</li>
              <li>Conseil en transformation numérique</li>
              <li>Design UX/UI</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Commandes et Devis</h2>
            <p>
              Toute commande est précédée d'un devis détaillé. L'acceptation du devis par le client vaut commande ferme. Les prix sont exprimés en euros, hors taxes sauf mention contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Paiement</h2>
            <p className="mb-4">Les modalités de paiement sont :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>30% à la commande</li>
              <li>40% à la livraison de la maquette</li>
              <li>30% à la livraison finale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Délais</h2>
            <p>
              Les délais de livraison sont indicatifs et peuvent varier selon la complexité du projet. Tout retard ne peut donner lieu à des dommages et intérêts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Propriété Intellectuelle</h2>
            <p>
              KaziHub Digital Agency cède les droits d'utilisation du site web ou de l'application développée au client final, sous réserve du paiement intégral. Le code source et la méthodologie restent la propriété de KaziHub.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Garanties</h2>
            <p>
              Nous garantissons le bon fonctionnement des développements pendant 6 mois après livraison. Cette garantie couvre les bugs et dysfonctionnements, mais pas les évolutions ou modifications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
