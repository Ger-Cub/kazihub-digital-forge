
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Nos Services',
    'nav.portfolio': 'Réalisations',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Construisons ensemble le futur numérique de l\'Afrique',
    'hero.subtitle': 'Agence digitale panafricaine spécialisée dans le développement de solutions intelligentes pour catalyser l\'innovation en Afrique',
    'hero.cta': 'Démarrer votre projet',
    'hero.quote': 'Devis gratuit',

    // About
    'about.title': 'À propos de KaziHub',
    'about.subtitle': 'Excellence • Innovation • Impact Social',
    'about.description': 'KaziHub Digital Agency est une agence de création numérique panafricaine, spécialisée dans le développement de solutions digitales intelligentes, ancrées dans les réalités et les ambitions du continent africain.',
    'about.mission': 'Notre mission est de catalyser l\'innovation digitale en Afrique en mettant la technologie au service du développement économique, social et culturel du continent.',
    'about.founder': 'Gerard Cubaka',
    'about.founder.title': 'CEO & Fondateur',
    'about.founder.bio': 'Développeur africain avec plus de 10 ans d\'expérience dans les technologies web, mobiles et l\'intelligence artificielle.',

    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions digitales complètes pour votre réussite',
    'services.web.title': 'Développement Web & Mobile',
    'services.web.desc': 'Sites vitrines, e-commerce, applications métiers. Design responsive, rapide et sécurisé.',
    'services.ai.title': 'Agents IA Personnalisés',
    'services.ai.desc': 'Chatbots intelligents pour support client, devis automatisés, comptabilité et réservations.',
    'services.marketing.title': 'Marketing Digital & IA',
    'services.marketing.desc': 'Stratégies SEO/SEA optimisées par IA, campagnes social media et création de contenu.',
    'services.support.title': 'Support & Automatisation',
    'services.support.desc': 'Service client automatisé multilingue et CRM intelligent.',
    'services.consulting.title': 'Conseil Stratégique',
    'services.consulting.desc': 'Coaching digital, transformation numérique pour PME et startups.',
    'services.design.title': 'UX/UI Design',
    'services.design.desc': 'Prototypes Figma, wireframes interactifs et optimisation UX.',

    // CTA
    'cta.title': 'Lancez votre transformation digitale aujourd\'hui !',
    'cta.subtitle': 'Demandez votre devis gratuit – Réponse garantie sous 24h',
    'cta.button': 'Obtenir un devis',
    'cta.whatsapp': 'WhatsApp',

    // Service Pages Common
    'services.process.title': 'Notre Processus',
    'services.process.1.step': '01',
    'services.process.1.title': 'Analyse',
    'services.process.1.desc': 'Étude de vos besoins et objectifs',
    'services.process.2.step': '02',
    'services.process.2.title': 'Design',
    'services.process.2.desc': 'Création de maquettes et prototypes',
    'services.process.3.step': '03',
    'services.process.3.title': 'Développement',
    'services.process.3.desc': 'Codage et intégration des fonctionnalités',
    'services.process.4.step': '04',
    'services.process.4.title': 'Déploiement',
    'services.process.4.desc': 'Mise en ligne et formation',
    'services.cta.ready': 'Prêt à démarrer votre projet ?',
    'services.cta.quote': 'Contactez-nous pour un devis gratuit',
    'services.cta.demo': 'Démo Gratuite',

    // Web Dev specifics
    'services.web.hero.subtitle': 'Créons ensemble des solutions web modernes, performantes et adaptées à vos besoins business',
    'services.web.feature1.title': 'Sites Vitrines',
    'services.web.feature1.desc': 'Sites web professionnels pour présenter votre activité',
    'services.web.feature2.title': 'E-commerce',
    'services.web.feature2.desc': 'Boutiques en ligne sécurisées et performantes',
    'services.web.feature3.title': 'Applications Mobiles',
    'services.web.feature3.desc': 'Apps natives et web progressives',

    // AI Agents specifics
    'services.ai.hero.subtitle': 'Automatisez vos interactions et boostez votre productivité avec nos agents IA intelligents',

    // Digital Marketing specifics
    'services.marketing.hero.subtitle': 'Boostez votre visibilité et convertissez plus avec nos stratégies marketing IA',

    // Pricing
    'pricing.title': 'Tarifs & Abonnements',
    'pricing.subtitle': 'Choisissez le plan qui convient le mieux à votre entreprise et commencez à automatiser dès aujourd\'hui.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.price': '$49 / mois',
    'pricing.starter.feature1': 'Support client automatisé 24/7',
    'pricing.starter.feature2': 'Chatbots multilingues',
    'pricing.starter.feature3': 'Gestion des tickets',
    'pricing.starter.feature4': 'Intégrations API de base',
    'pricing.pro.name': 'Pro',
    'pricing.pro.price': '$99 / mois',
    'pricing.pro.feature1': 'Toutes les fonctionnalités Starter',
    'pricing.pro.feature2': 'CRM intelligent avec IA prédictive',
    'pricing.pro.feature3': 'Automatisation avancée des workflows',
    'pricing.pro.feature4': 'Intégrations API personnalisées',
    'pricing.enterprise.name': 'Entreprise',
    'pricing.enterprise.price': 'Sur mesure',
    'pricing.enterprise.feature1': 'Solutions adaptées à vos besoins',
    'pricing.enterprise.feature2': 'Accompagnement dédié',
    'pricing.enterprise.feature3': 'Évolutivité pour grandes entreprises',
    'pricing.enterprise.feature4': 'Support prioritaire',
    'pricing.cta.start': 'Commencer',
    'pricing.cta.try': 'Essayer Pro',
    'pricing.cta.contact': 'Contactez-nous',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.company': 'Entreprise',
    'contact.message': 'Votre projet',
    'contact.send': 'Envoyer le message',
    'contact.success': 'Message envoyé avec succès !',

    // Footer
    'footer.description': 'Agence digitale panafricaine - Solutions intelligentes pour l\'Afrique de demain',
    'footer.rights': 'Tous droits réservés.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'CGV',
    'footer.response': 'Réponse sous 24h',

    // SEO
    'seo.home.title': 'KaziHub Digital Agency - Agence Digitale Panafricaine',
    'seo.home.description': 'Solutions digitales intelligentes pour l\'Afrique. Développement web, IA, marketing digital et transformation numérique.',
    'seo.pricing.title': 'Tarifs - Des solutions accessibles pour votre croissance',
    'seo.pricing.description': 'Découvrez nos offres transparentes pour booster votre présence digitale et vos processus métier.',
    'seo.web.title': 'Développement Web & Mobile - Solutions sur mesure',
    'seo.web.description': 'Création de sites vitrines, e-commerce et applications mobiles performantes et sécurisées.',
    'seo.ai.title': 'Agents IA Personnalisés - Automatisez votre futur',
    'seo.ai.description': 'Intégrez des agents IA intelligents pour automatiser votre support client et vos workflows.',
    'seo.marketing.title': 'Marketing Digital & IA - Boostez votre visibilité',
    'seo.marketing.description': 'Stratégies marketing optimisées par l\'IA pour une croissance durable en Afrique.',
    'seo.support.title': 'Support & Automatisation - Assistance 24/7',
    'seo.support.description': 'Solutions de support automatisé et CRM intelligent pour une expérience client optimale.',
    'seo.consulting.title': 'Conseil Stratégique - Transformation Numérique',
    'seo.consulting.description': 'Accompagnement expert pour votre transition digitale et votre stratégie de croissance.',
    'seo.design.title': 'UX/UI Design - Interfaces Élégantes',
    'seo.design.description': 'Conception d\'interfaces utilisateur intuitives et centrées sur l\'utilisateur.',
    'seo.legal.title': 'Mentions Légales - KaziHub',
    'seo.legal.description': 'Informations légales concernant l\'agence KaziHub Digital Agency.',
    'seo.privacy.title': 'Politique de Confidentialité - KaziHub',
    'seo.privacy.description': 'Comment nous protégeons vos données chez KaziHub Digital Agency.',
    'seo.terms.title': 'Conditions Générales de Vente - KaziHub',
    'seo.terms.description': 'Les termes et conditions liés à nos prestations de services digitaux.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Our Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Let\'s build Africa\'s digital future together',
    'hero.subtitle': 'Pan-African digital agency specialized in developing smart solutions to catalyze innovation across Africa',
    'hero.cta': 'Start Your Project',
    'hero.quote': 'Free Quote',

    // About
    'about.title': 'About KaziHub',
    'about.subtitle': 'Excellence • Innovation • Social Impact',
    'about.description': 'KaziHub Digital Agency is a Pan-African digital creation agency, specialized in building smart, high-impact digital solutions tailored to Africa\'s realities and ambitions.',
    'about.mission': 'Our mission is to drive Africa\'s digital innovation by using technology as a catalyst for social, economic, and creative progress.',
    'about.founder': 'Gerard Cubaka',
    'about.founder.title': 'CEO & Founder',
    'about.founder.bio': 'African developer with over 10 years of experience in web, mobile, and AI technologies.',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete digital solutions for your success',
    'services.web.title': 'Web & Mobile Development',
    'services.web.desc': 'Showcase websites, e-commerce, business apps. Responsive, fast, and secure design.',
    'services.ai.title': 'Custom AI Agents',
    'services.ai.desc': 'Smart chatbots for customer support, automated quotes, accounting, and bookings.',
    'services.marketing.title': 'Digital Marketing & AI',
    'services.marketing.desc': 'AI-optimized SEO/SEA strategies, social media campaigns, and content creation.',
    'services.support.title': 'Support & Automation',
    'services.support.desc': 'Multilingual automated customer service and intelligent CRM.',
    'services.consulting.title': 'Strategic Consulting',
    'services.consulting.desc': 'Digital coaching, digital transformation for SMEs and startups.',
    'services.design.title': 'UX/UI Design',
    'services.design.desc': 'Figma prototypes, interactive wireframes, and UX optimization.',

    // CTA
    'cta.title': 'Start your digital transformation today!',
    'cta.subtitle': 'Get your free quote – Response within 24 hours',
    'cta.button': 'Get a Quote',
    'cta.whatsapp': 'WhatsApp',

    // Service Pages Common
    'services.process.title': 'Our Process',
    'services.process.1.step': '01',
    'services.process.1.title': 'Analysis',
    'services.process.1.desc': 'Study of your needs and objectives',
    'services.process.2.step': '02',
    'services.process.2.title': 'Design',
    'services.process.2.desc': 'Creation of mockups and prototypes',
    'services.process.3.step': '03',
    'services.process.3.title': 'Development',
    'services.process.3.desc': 'Coding and feature integration',
    'services.process.4.step': '04',
    'services.process.4.title': 'Deployment',
    'services.process.4.desc': 'Launch and training',
    'services.cta.ready': 'Ready to start your project?',
    'services.cta.quote': 'Contact us for a free quote',
    'services.cta.demo': 'Free Demo',

    // Web Dev specifics
    'services.web.hero.subtitle': 'Let\'s create modern, high-performance web solutions tailored to your business needs together',
    'services.web.feature1.title': 'Showcase Websites',
    'services.web.feature1.desc': 'Professional websites to showcase your business',
    'services.web.feature2.title': 'E-commerce',
    'services.web.feature2.desc': 'Secure and high-performing online stores',
    'services.web.feature3.title': 'Mobile Applications',
    'services.web.feature3.desc': 'Native and progressive web apps',

    // AI Agents specifics
    'services.ai.hero.subtitle': 'Automate your interactions and boost your productivity with our intelligent AI agents',

    // Digital Marketing specifics
    'services.marketing.hero.subtitle': 'Boost your visibility and convert more with our AI marketing strategies',

    // Pricing
    'pricing.title': 'Pricing & Plans',
    'pricing.subtitle': 'Choose the plan that best fits your business and start automating today.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.price': '$49 / month',
    'pricing.starter.feature1': '24/7 automated customer support',
    'pricing.starter.feature2': 'Multilingual chatbots',
    'pricing.starter.feature3': 'Ticket management',
    'pricing.starter.feature4': 'Basic API integrations',
    'pricing.pro.name': 'Pro',
    'pricing.pro.price': '$99 / month',
    'pricing.pro.feature1': 'All Starter features',
    'pricing.pro.feature2': 'Intelligent CRM with predictive AI',
    'pricing.pro.feature3': 'Advanced workflow automation',
    'pricing.pro.feature4': 'Custom API integrations',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.feature1': 'Solutions tailored to your needs',
    'pricing.enterprise.feature2': 'Dedicated support',
    'pricing.enterprise.feature3': 'Scalability for large enterprises',
    'pricing.enterprise.feature4': 'Priority support',
    'pricing.cta.start': 'Start Now',
    'pricing.cta.try': 'Try Pro',
    'pricing.cta.contact': 'Contact Us',

    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Your Project',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',

    // Footer
    'footer.description': 'Pan-African digital agency - Smart solutions for tomorrow\'s Africa',
    'footer.rights': 'All rights reserved.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'T&Cs',
    'footer.response': 'Response within 24h',

    // SEO
    'seo.home.title': 'KaziHub Digital Agency - Pan-African Digital Agency',
    'seo.home.description': 'Smart digital solutions for Africa. Web development, AI, digital marketing, and digital transformation.',
    'seo.pricing.title': 'Pricing - Accessible solutions for your growth',
    'seo.pricing.description': 'Discover our transparent offers to boost your digital presence and business processes.',
    'seo.web.title': 'Web & Mobile Development - Custom Solutions',
    'seo.web.description': 'Creation of showcase sites, e-commerce, and high-performance, secure mobile applications.',
    'seo.ai.title': 'Custom AI Agents - Automate your future',
    'seo.ai.description': 'Integrate intelligent AI agents to automate your customer support and workflows.',
    'seo.marketing.title': 'Digital Marketing & AI - Boost your visibility',
    'seo.marketing.description': 'AI-optimized marketing strategies for sustainable growth in Africa.',
    'seo.support.title': 'Support & Automation - 24/7 Assistance',
    'seo.support.description': 'Automated support solutions and intelligent CRM for an optimal customer experience.',
    'seo.consulting.title': 'Strategic Consulting - Digital Transformation',
    'seo.consulting.description': 'Expert guidance for your digital transition and growth strategy.',
    'seo.design.title': 'UX/UI Design - Elegant Interfaces',
    'seo.design.description': 'Design of intuitive and user-centric user interfaces.',
    'seo.legal.title': 'Legal Notices - KaziHub',
    'seo.legal.description': 'Legal information regarding KaziHub Digital Agency.',
    'seo.privacy.title': 'Privacy Policy - KaziHub',
    'seo.privacy.description': 'How we protect your data at KaziHub Digital Agency.',
    'seo.terms.title': 'Terms and Conditions of Sale - KaziHub',
    'seo.terms.description': 'The terms and conditions related to our digital service provisions.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
