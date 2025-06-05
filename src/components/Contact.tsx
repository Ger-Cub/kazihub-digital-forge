
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // À remplacer par votre clé
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          to: 'contact@kazihub.digital'
        }),
      });

      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: "Nous vous recontacterons sous 24h !",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Bonjour KaziHub ! Je souhaite discuter d'un projet digital.`;
    const whatsappUrl = `https://wa.me/+243991102448?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-kazihub-dark via-kazihub-blue/10 to-kazihub-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <div>
                <Input
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-kazihub-gray border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-kazihub-gray border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder={t('contact.company')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-kazihub-gray border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-kazihub-gray border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Button 
                type="submit" 
                className="btn-primary w-full text-lg py-3"
                disabled={isLoading}
              >
                {isLoading ? 'Envoi...' : t('contact.send')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Direct</h3>
              <p className="text-gray-300 mb-6">Parlons de votre projet sur WhatsApp</p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                {t('cta.whatsapp')} 📱
              </Button>
            </div>

            {/* Contact Details */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">📧</span>
                  <span className="text-gray-300">contact@kazihub.digital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">📱</span>
                  <span className="text-gray-300">+243 991 102 448</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">🌍</span>
                  <span className="text-gray-300">Kinshasa, RD Congo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">⏰</span>
                  <span className="text-gray-300">Réponse sous 24h</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm text-gray-300">Devis Gratuit</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm text-gray-300">Démarrage Rapide</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="text-sm text-gray-300">Solutions Sur-Mesure</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm text-gray-300">Support 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
