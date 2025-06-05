
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-kazihub-dark text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Conditions Générales de Vente</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 1 - Objet</h2>
            <p>
              Les présentes conditions générales de vente ont pour objet de définir les modalités et conditions dans lesquelles KaziHub Digital Agency fournit ses services de création numérique, développement web, marketing digital et conseil technologique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 2 - Services</h2>
            <p className="mb-4">KaziHub Digital Agency propose les services suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Développement de sites web et applications mobiles</li>
              <li>Création d'agents IA et chatbots personnalisés</li>
              <li>Services de marketing digital et gestion de réseaux sociaux</li>
              <li>Conseil stratégique et accompagnement digital</li>
              <li>Design UX/UI et création de contenu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 3 - Commandes</h2>
            <p>
              Toute commande implique l'acceptation pleine et entière des présentes conditions générales de vente. Un devis détaillé sera établi pour chaque projet, précisant les prestations, délais et tarifs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 4 - Prix et Paiement</h2>
            <p className="mb-4">Les prix sont exprimés en euros, hors taxes. Les modalités de paiement sont :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>30% d'acompte à la commande</li>
              <li>40% en cours de réalisation</li>
              <li>30% à la livraison</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 5 - Délais</h2>
            <p>
              Les délais de réalisation sont communiqués à titre indicatif. Un retard dans la livraison ne peut donner lieu à des dommages et intérêts ou à l'annulation de la commande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 6 - Propriété Intellectuelle</h2>
            <p>
              Les créations réalisées par KaziHub Digital Agency restent la propriété du client après paiement intégral. Nous nous réservons le droit d'utiliser les réalisations dans notre portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 7 - Garanties</h2>
            <p>
              Nous garantissons nos prestations contre tout défaut de fonctionnement pendant une période de 3 mois suivant la livraison, hors modifications demandées par le client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 8 - Responsabilité</h2>
            <p>
              Notre responsabilité est limitée au montant des prestations facturées. Nous ne saurions être tenus responsables des dommages indirects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 9 - Litiges</h2>
            <p>
              En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux de Kinshasa seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Article 10 - Contact</h2>
            <p>
              Pour toute question relative aux présentes CGV : 
              <span className="text-kazihub-gold"> contact@kazihub.digital</span>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
