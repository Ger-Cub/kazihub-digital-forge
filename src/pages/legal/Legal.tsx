
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SEO } from '../../components/SEO';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO titleKey="seo.legal.title" descriptionKey="seo.legal.description" />
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Mentions Légales</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Éditeur du Site</h2>
            <p className="mb-4">
              <strong className="text-foreground">KaziHub Digital Agency</strong><br />
              Agence de création numérique<br />
              Kinshasa, République Démocratique du Congo<br />
              Email : contact@kazihub.digital<br />
              Téléphone : +243 991 102 448
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Directeur de Publication</h2>
            <p>
              Gerard Cubaka<br />
              Fondateur & CEO<br />
              KaziHub Digital Agency
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
            <p>
              Nous hébergons vos site sur :<br />
              <strong className="text-foreground">Hostinger</strong><br />
              <strong className="text-foreground">Vercel</strong><br />
              <strong className="text-foreground">GitHub</strong>.<br />
              Pour plus d'informations sur leur politique de confidentialité, veuillez consulter leurs sites respectifs.

            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Propriété Intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Données Personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par KaziHub Digital Agency pour la gestion des demandes de contact et de devis. Elles sont conservées pendant 3 ans et sont destinées uniquement à notre équipe commerciale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation des cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;
