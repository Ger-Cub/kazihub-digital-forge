
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-kazihub-dark border-t border-gray-800">
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
                <p className="text-xs text-gray-400">Digital Agency</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
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
              <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                <span className="text-white">📱</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-kazihub-gold transition-colors">Développement Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kazihub-gold transition-colors">Applications Mobile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kazihub-gold transition-colors">Agents IA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kazihub-gold transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-kazihub-gold transition-colors">UX/UI Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">📧 contact@kazihub.digital</li>
              <li className="text-gray-400">📱 +243 000 000 000</li>
              <li className="text-gray-400">🌍 Kinshasa, RD Congo</li>
              <li className="text-gray-400">⏰ Réponse sous 24h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 KaziHub Digital Agency. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-kazihub-gold text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-kazihub-gold text-sm transition-colors">Confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-kazihub-gold text-sm transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
