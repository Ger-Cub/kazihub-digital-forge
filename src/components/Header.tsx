
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { key: 'nav.home', href: isHomePage ? '#home' : '/#home' },
    { key: 'nav.about', href: isHomePage ? '#about' : '/#about' },
    { key: 'nav.services', href: isHomePage ? '#services' : '/#services' },
    { key: 'nav.contact', href: isHomePage ? '#contact' : '/#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-lg flex items-center justify-center">
              <span className="text-kazihub-dark font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">KaziHub</h1>
              <p className="text-xs text-gray-400">Digital Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-300 hover:text-kazihub-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle & Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="border-kazihub-gold text-kazihub-gold hover:bg-kazihub-gold hover:text-kazihub-dark rounded-full px-3"
            >
              {language.toUpperCase()}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-kazihub-gray/50 backdrop-blur-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-300 hover:text-kazihub-gold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
