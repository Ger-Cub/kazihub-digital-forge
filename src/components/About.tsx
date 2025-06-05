
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-kazihub-dark to-kazihub-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-kazihub-gold font-semibold">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.mission')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-kazihub-gold font-semibold">Excellence</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-kazihub-gold font-semibold">Collaboration</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="text-kazihub-gold font-semibold">Innovation</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-kazihub-gold font-semibold">Impact Social</div>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="glass-effect p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-kazihub-gold to-kazihub-emerald rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-kazihub-dark">GC</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {t('about.founder')}
              </h3>
              <p className="text-kazihub-gold font-semibold mb-4">
                {t('about.founder.title')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.founder.bio')}
              </p>
              
              {/* Social links */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                  <span className="text-white">💼</span>
                </a>
                <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                  <span className="text-white">🐙</span>
                </a>
                <a href="#" className="w-10 h-10 bg-kazihub-blue rounded-full flex items-center justify-center hover:bg-kazihub-gold transition-colors">
                  <span className="text-white">✉️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
