
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Team = () => {
    const { t } = useLanguage();

    const members = [
        { id: 1, nameKey: 'team.member1.name', roleKey: 'team.member1.role', image: '/lovable-uploads/ceo-modern-v2.png' },
        { id: 2, nameKey: 'team.member2.name', roleKey: 'team.member2.role', image: '/lovable-uploads/ceo-modern.jpg' },
        { id: 3, nameKey: 'team.member3.name', roleKey: 'team.member3.role', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200' },
        { id: 4, nameKey: 'team.member4.name', roleKey: 'team.member4.role', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200' },
    ];

    return (
        <section id="team" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-bold font-outfit gradient-text mb-6">
                        {t('team.title')}
                    </h2>
                    <p className="text-xl text-cosmic-slate font-bold uppercase tracking-[0.2em]">
                        {t('team.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member) => (
                        <div key={member.id} className="group relative">
                            <div className="absolute inset-0 bg-cosmic-indigo/5 blur-2xl group-hover:bg-cosmic-indigo/10 transition-colors duration-500 rounded-full"></div>
                            <div className="glass-card p-6 text-center relative z-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-cosmic-indigo to-cosmic-violet p-1 shadow-xl group-hover:rotate-3 transition-transform duration-500">
                                    <img
                                        src={member.image}
                                        alt={t(member.nameKey)}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <h3 className="text-xl font-bold font-outfit text-white mb-2 group-hover:text-cosmic-indigo transition-colors">
                                    {t(member.nameKey)}
                                </h3>
                                <p className="text-cosmic-slate text-sm font-bold uppercase tracking-wider mb-6">
                                    {t(member.roleKey)}
                                </p>

                                {/* Minimal Social Links */}
                                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <a href="#" className="text-white/40 hover:text-cosmic-indigo transition-colors text-lg">💼</a>
                                    <a href="#" className="text-white/40 hover:text-cosmic-violet transition-colors text-lg">🐦</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
