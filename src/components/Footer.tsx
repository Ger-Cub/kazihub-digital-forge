import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-lg flex items-center justify-center">
                <span className="text-kazihub-dark font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">KaziHub</h1>
                <p className="text-xs text-muted-foreground">Digital Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                <span className="text-white">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                <span className="text-white">🐙</span>
              </a>
              <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                <span className="text-white">✉️</span>
              </a>
              <a href={`https://wa.me/+243991102448`} className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                <span className="text-white">📱</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.web.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agents"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.ai.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.marketing.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/support-automation"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.support.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/strategic-consulting"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.consulting.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ux-ui-design"
                  className="text-muted-foreground hover:text-kazihub-gold transition-colors"
                  onClick={scrollToTop}
                >
                  {t('services.design.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">📧 contact@kazihub.digital</li>
              <li className="text-muted-foreground">📱 +243 991 102 448</li>
              <li className="text-muted-foreground">🌍 Kinshasa, RD Congo</li>
              <li className="text-muted-foreground">⏰ {t('footer.response')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 KaziHub Digital Agency. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal" className="text-muted-foreground hover:text-kazihub-gold text-sm transition-colors" onClick={scrollToTop}>{t('footer.legal')}</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-kazihub-gold text-sm transition-colors" onClick={scrollToTop}>{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-kazihub-gold text-sm transition-colors" onClick={scrollToTop}>{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
