import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  Linkedin,
  Github,
  Mail,
  MessageSquare,
  Phone,
  Globe,
  Clock
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-8 group" onClick={scrollToTop}>
              <Logo size="lg" />
              <div>
                <h1 className="text-2xl font-bold font-outfit text-foreground tracking-tight">KaziHub</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cosmic-slate font-bold">Digital Agency</p>
              </div>
            </Link>
            <p className="text-cosmic-slate mb-10 max-w-sm leading-relaxed font-medium">
              {t('footer.description')}
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <Linkedin className="w-5 h-5 text-foreground" />, link: '#' },
                { icon: <Github className="w-5 h-5 text-foreground" />, link: '#' },
                { icon: <Mail className="w-5 h-5 text-foreground" />, link: 'mailto:contact@kazihub.digital' },
                { icon: <MessageSquare className="w-5 h-5 text-foreground" />, link: `https://wa.me/+243991102448` }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center hover:bg-cosmic-indigo transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-8">{t('footer.services')}</h3>
            <ul className="space-y-4">
              {[
                { to: '/services/web-development', key: 'services.web.title' },
                { to: '/services/ai-agents', key: 'services.ai.title' },
                { to: '/services/digital-marketing', key: 'services.marketing.title' },
                { to: '/services/support-automation', key: 'services.support.title' },
                { to: '/services/strategic-consulting', key: 'services.consulting.title' },
                { to: '/services/ux-ui-design', key: 'services.design.title' }
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.to}
                    className="text-cosmic-slate hover:text-cosmic-indigo transition-colors duration-300 font-medium"
                    onClick={scrollToTop}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-8">{t('footer.contact')}</h3>
            <ul className="space-y-5">
              {[
                { icon: <Mail className="w-4 h-4" />, val: 'contact@kazihub.digital' },
                { icon: <Phone className="w-4 h-4" />, val: '+243 991 102 448' },
                { icon: <Globe className="w-4 h-4" />, val: 'Kinshasa, RD Congo' },
                { icon: <Clock className="w-4 h-4" />, val: t('footer.response') }
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-cosmic-slate font-medium">
                  <span className="text-foreground/40">{item.icon}</span>
                  <span>{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cosmic-slate/60 text-sm font-medium">
            © 2024 KaziHub Digital Agency. {t('footer.rights')}
          </p>
          <div className="flex space-x-8">
            {['legal', 'privacy', 'terms'].map((key) => (
              <Link
                key={key}
                to={`/${key}`}
                className="text-cosmic-slate/60 hover:text-foreground text-xs font-bold uppercase tracking-widest transition-colors"
                onClick={scrollToTop}
              >
                {t(`footer.${key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
