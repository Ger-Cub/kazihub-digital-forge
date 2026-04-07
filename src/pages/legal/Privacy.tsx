
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO titleKey="seo.privacy.title" descriptionKey="seo.privacy.description" />
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Collecte des Données</h2>
            <p className="mb-4">
              KaziHub Digital Agency collecte les données personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom, prénom et coordonnées de contact</li>
              <li>Informations sur votre entreprise</li>
              <li>Données de navigation sur notre site</li>
              <li>Communications avec notre équipe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Utilisation des Données</h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes et fournir nos services</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Vous informer de nos actualités (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Protection des Données</h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Vos Droits</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question concernant cette politique, contactez-nous à :
              <span className="text-kazihub-gold"> contact@kazihub.digital</span>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
