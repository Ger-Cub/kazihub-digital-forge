
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
    <header className="fixed top-0 w-full z-50 glass-premium border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-cosmic-indigo to-cosmic-violet rounded-xl flex items-center justify-center shadow-lg shadow-cosmic-indigo/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-2xl font-outfit">K</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold font-outfit tracking-tight text-white leading-none">KaziHub</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cosmic-slate font-medium">Digital Forge</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-cosmic-slate hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle & Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={toggleLanguage}
                className="glass-premium border-white/10 text-white hover:bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider"
              >
                {language}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-cosmic-slate hover:text-white p-2 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 glass-premium border-t-0 rounded-b-2xl shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-cosmic-slate hover:text-white block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="pt-4 flex items-center justify-between px-4 sm:hidden">
                <ThemeToggle />
                <button
                  onClick={toggleLanguage}
                  className="glass-premium border-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider"
                >
                  {language}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
