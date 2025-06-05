
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
    'footer.rights': 'Tous droits réservés.'
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
    'footer.rights': 'All rights reserved.'
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
