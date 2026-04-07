
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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-pink/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-outfit gradient-text mb-6">
            {t('cta.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-cosmic-slate max-w-2xl mx-auto font-medium">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="glass-premium p-10 rounded-[2.5rem] relative order-2 lg:order-1 border border-white/5">
            <h3 className="text-2xl font-bold font-outfit text-white mb-8">{t('contact.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/[0.03] border-white/10 text-white placeholder-cosmic-slate h-14 rounded-2xl focus:ring-cosmic-indigo"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/[0.03] border-white/10 text-white placeholder-cosmic-slate h-14 rounded-2xl focus:ring-cosmic-indigo"
                />
              </div>
              <Input
                name="company"
                placeholder={t('contact.company')}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-white/[0.03] border-white/10 text-white placeholder-cosmic-slate h-14 rounded-2xl focus:ring-cosmic-indigo"
              />
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/[0.03] border-white/10 text-white placeholder-cosmic-slate rounded-2xl focus:ring-cosmic-indigo p-5"
              />
              <Button
                type="submit"
                className="btn-primary w-full h-16 text-lg rounded-2xl"
                disabled={isLoading}
              >
                {isLoading ? t('contact.sending') : (
                  <>
                    <span>{t('contact.send')}</span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">↗</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10 order-1 lg:order-2">
            {/* WhatsApp CTA */}
            <div className="glass-card p-10 rounded-[2.5rem] text-center group border border-white/5">
              <div className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold font-outfit text-white mb-4">{t('contact.direct.title')}</h3>
              <p className="text-cosmic-slate mb-8 font-medium">{t('contact.direct.subtitle')}</p>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-500 text-white font-bold h-16 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-green-600/20 w-full md:w-auto"
              >
                {t('cta.whatsapp')} 📱
              </Button>
            </div>

            {/* Contact Details */}
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold font-outfit text-white mb-8 uppercase tracking-widest">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                {[
                  { icon: '📧', val: 'contact@kazihub.digital' },
                  { icon: '📱', val: '+243 991 102 448' },
                  { icon: '🌍', val: 'Kinshasa, RD Congo' },
                  { icon: '⏰', val: t('footer.response') }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 group">
                    <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center group-hover:bg-cosmic-indigo transition-colors duration-300">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span className="text-cosmic-slate font-medium text-lg">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
