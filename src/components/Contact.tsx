
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
          access_key: 'e98f16d5-a5b7-4218-bc02-2a9dfe0e944e',
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
          description: t('contact.success.desc'),
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error(t('contact.error'));
      }
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.error.desc'),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = t('contact.whatsapp.default');
    const whatsappUrl = `https://wa.me/+243991102448?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="2e250eed-85d5-4a23-9a4c-e97c662adc24" />
              <div>
                <Input
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-accent/50 border-border text-foreground placeholder-muted-foreground"
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
                  className="bg-accent/50 border-border text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder={t('contact.company')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-accent/50 border-border text-foreground placeholder-muted-foreground"
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
                  className="bg-accent/50 border-border text-foreground placeholder-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                className="btn-primary w-full text-lg py-3"
                disabled={isLoading}
              >
                {isLoading ? t('contact.sending') : t('contact.send')}
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
              <h3 className="text-xl font-bold text-foreground mb-2">{t('contact.direct.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('contact.direct.subtitle')}</p>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                {t('cta.whatsapp')} 📱
              </Button>
            </div>

            {/* Contact Details */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">📧</span>
                  <span className="text-muted-foreground">contact@kazihub.digital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">📱</span>
                  <span className="text-muted-foreground">+243 991 102 448</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">🌍</span>
                  <span className="text-muted-foreground">Kinshasa, RD Congo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kazihub-gold">⏰</span>
                  <span className="text-muted-foreground">{t('footer.response')}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm text-muted-foreground">{t('contact.feature.quote')}</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm text-muted-foreground">{t('contact.feature.start')}</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💡</div>
                <div className="text-sm text-muted-foreground">{t('contact.feature.custom')}</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm text-muted-foreground">{t('contact.feature.support')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
