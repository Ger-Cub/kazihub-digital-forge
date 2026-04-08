
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
    const { t } = useLanguage();

    const members = [
        { id: 1, nameKey: 'team.member1.name', roleKey: 'team.member1.role', image: '/lovable-uploads/team/member1.jpg' },
        { id: 2, nameKey: 'team.member2.name', roleKey: 'team.member2.role', image: '/lovable-uploads/team/member2.png' },
        { id: 3, nameKey: 'team.member3.name', roleKey: 'team.member3.role', image: '/lovable-uploads/team/member3.jpg' },
        { id: 4, nameKey: 'team.member4.name', roleKey: 'team.member4.role', image: '/lovable-uploads/team/member4.jpg' },
    ];

    const lead = {
        nameKey: 'team.lead.name',
        roleKey: 'team.lead.role',
        image: '/lovable-uploads/ceo-modern-v2.png'
    };

    const MemberCard = ({ member }: { member: any }) => (
        <div className="group relative">
            <div className="absolute inset-0 bg-cosmic-indigo/5 blur-2xl group-hover:bg-cosmic-indigo/10 transition-colors duration-500 rounded-full"></div>
            <div className="glass-card p-6 text-center relative z-10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-cosmic-indigo to-cosmic-violet p-1 shadow-xl group-hover:rotate-3 transition-transform duration-500">
                    <img
                        src={member.image}
                        alt={t(member.nameKey)}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-xl font-bold font-outfit text-foreground mb-2 group-hover:text-cosmic-indigo transition-colors">
                    {t(member.nameKey)}
                </h3>
                <p className="text-cosmic-slate text-sm font-bold uppercase tracking-wider mb-6">
                    {t(member.roleKey)}
                </p>

                <div className="flex justify-center space-x-4 transition-opacity duration-500">
                    <a href="#" className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center text-foreground/50 hover:text-cosmic-indigo hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 shadow-sm dark:shadow-none">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 glass-premium rounded-xl flex items-center justify-center text-foreground/50 hover:text-cosmic-violet hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 shadow-sm dark:shadow-none">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );

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

                {/* Technical Direction Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-outfit text-foreground inline-block relative">
                            {t('team.lead.title')}
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet rounded-full"></div>
                        </h3>
                    </div>
                    <div className="max-w-xs mx-auto">
                        <MemberCard member={lead} />
                    </div>
                </div>

                {/* Team Members Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-outfit text-foreground inline-block relative">
                            {t('team.members.title')}
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet rounded-full opacity-50"></div>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
