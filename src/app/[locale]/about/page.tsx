import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Section, SectionHeader } from '@/components/Section';

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <AboutPageContent />;
}

function AboutPageContent() {
    const t = useTranslations('about');

    const values = t.raw('values.items') as Array<{
        title: string;
        description: string;
    }>;

    const team = t.raw('team.members') as Array<{
        name: string;
        role: string;
        placeholder: boolean;
    }>;

    return (
        <>
            {/* Hero */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-display-md lg:text-display-lg font-display font-bold text-foreground">
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-lg text-foreground-secondary">
                        {t('subtitle')}
                    </p>
                </div>
            </Section>

            {/* Mission & Why - Clean & Elegant */}
            <Section background="tertiary" className="!pt-0 lg:!pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mission */}
                    <div className="p-10 bg-white rounded-3xl border border-border shadow-soft flex flex-col justify-between group hover:shadow-elevated transition-shadow duration-300">
                        <div>
                            <div className="w-12 h-12 flex items-center justify-center bg-[#8B2332]/10 text-[#8B2332] rounded-2xl mb-8">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                                {t('mission.title')}
                            </h2>
                            <p className="text-lg text-foreground-secondary leading-relaxed">
                                {t('mission.description')}
                            </p>
                        </div>
                    </div>

                    {/* Why */}
                    <div className="p-10 bg-white rounded-3xl border border-border/50 shadow-soft flex flex-col justify-between group hover:shadow-elevated transition-shadow duration-300">
                        <div>
                            <div className="w-12 h-12 flex items-center justify-center bg-gold/20 text-yellow-700 rounded-2xl mb-8 opacity-80">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                                {t('why.title')}
                            </h2>
                            <p className="text-lg text-foreground-secondary leading-relaxed">
                                {t('why.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values - Balanced Vertical */}
            <Section>
                <SectionHeader title={t('values.title')} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Clarté - Teal */}
                    <article className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 min-h-[220px]">
                        <div className="absolute inset-0 bg-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="w-12 h-12 flex items-center justify-center bg-teal-50 text-teal-600 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                                    {values[0]?.title}
                                </h3>
                                <p className="text-sm text-foreground-secondary leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {values[0]?.description}
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Rigueur - Indigo */}
                    <article className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 min-h-[220px]">
                        <div className="absolute inset-0 bg-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6 animate-spin-slow-once" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                                    {values[1]?.title}
                                </h3>
                                <p className="text-sm text-foreground-secondary leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {values[1]?.description}
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Empathie - Rose */}
                    <article className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 min-h-[220px]">
                        <div className="absolute inset-0 bg-rose-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="w-12 h-12 flex items-center justify-center bg-rose-50 text-rose-600 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                                    {values[2]?.title}
                                </h3>
                                <p className="text-sm text-foreground-secondary leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {values[2]?.description}
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Réalisme - Emerald */}
                    <article className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 min-h-[220px]">
                        <div className="absolute inset-0 bg-emerald-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                                    {values[3]?.title}
                                </h3>
                                <p className="text-sm text-foreground-secondary leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {values[3]?.description}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </Section>

            {/* Team */}
            <Section background="brand" className="relative overflow-hidden">
                {/* Animated floating shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-float-slow" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C6A962]/10 blur-2xl animate-float-slower" />
                    <div className="absolute top-1/4 left-[5%] w-20 h-20 rounded-full border-2 border-white/10 animate-float-slow animation-delay-300" />
                    <div className="absolute bottom-1/4 right-[5%] w-16 h-16 rounded-full bg-white/5 animate-float-slower animation-delay-500" />
                    <div className="absolute top-1/2 right-[10%] w-10 h-10 rounded-full border border-white/10 animate-float-slow animation-delay-200" />
                </div>

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-display-sm lg:text-display-md font-display font-bold text-white">
                        {t('team.title')}
                    </h2>
                    <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                        {t('team.description')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <article
                            key={index}
                            className="p-10 bg-white rounded-3xl border border-white/10 shadow-soft text-center flex flex-col items-center hover:transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Large Image Placeholder */}
                            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-100 border-4 border-[#8B2332]/5 flex items-center justify-center overflow-hidden relative group">
                                <svg
                                    className="w-20 h-20 text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {/* Overlay hint */}
                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[#8B2332] text-xs font-semibold uppercase tracking-wider bg-white px-2 py-1 rounded-full shadow-sm">
                                        Add Photo
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                                {member.name}
                            </h3>
                            <p className="text-lg text-[#8B2332] font-medium mb-2">
                                {member.role}
                            </p>
                            {member.placeholder && (
                                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                                    Pending Photo
                                </span>
                            )}
                        </article>
                    ))}
                </div>
            </Section>
        </>
    );
}
