import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Section, SectionHeader } from '@/components/Section';
import { PricingCard } from '@/components/PricingCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/Button';

export default async function PricingPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PricingPageContent />;
}

function PricingPageContent() {
    const t = useTranslations('pricing');
    const tContact = useTranslations('contact');

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

            {/* Pricing Card */}
            <Section background="secondary" className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                    {/* Top Left Area */}
                    <svg className="absolute top-10 left-10 w-24 h-24 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> {/* Cap */}
                    <svg className="absolute top-20 left-1/4 w-16 h-16 transform rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> {/* Pen */}
                    <svg className="absolute top-5 left-1/3 w-12 h-12 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> {/* Calculator */}

                    {/* Top Right Area */}
                    <svg className="absolute top-12 right-12 w-20 h-20 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> {/* Book */}
                    <svg className="absolute top-32 right-1/3 w-14 h-14 transform -rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> {/* File */}
                    <svg className="absolute top-8 right-1/4 w-10 h-10 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> {/* Lightbulb */}

                    {/* Middle Side Areas */}
                    <svg className="absolute top-1/2 left-5 w-16 h-16 transform rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> {/* Pen */}
                    <svg className="absolute top-1/2 right-5 w-16 h-16 transform -rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> {/* File */}
                    <svg className="absolute top-1/2 left-1/4 w-10 h-10 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> {/* Flask */}

                    {/* Bottom Left Area */}
                    <svg className="absolute bottom-12 left-12 w-20 h-20 transform rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> {/* Edit */}
                    <svg className="absolute bottom-32 left-1/3 w-16 h-16 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> {/* Book */}
                    <svg className="absolute bottom-8 left-1/4 w-12 h-12 transform rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2a1 1 0 011 1v1h3a1 1 0 011 1v3a1 1 0 01-1 1H8v1.586l.293.293a1 1 0 01.293.707V19a2 2 0 01-2 2H6a2 2 0 01-2-2V12a2 2 0 012-2h.586l.293-.293V8H6a1 1 0 01-1-1V4a1 1 0 011-1h1zm10 0a1 1 0 011 1v1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3v1.586l.293.293a1 1 0 01.293.707V19a2 2 0 01-2 2h-1.586l-.293-.293a1 1 0 01-.293-.707V12a2 2 0 012-2h.586l.293-.293V8h-1a1 1 0 01-1-1V4a1 1 0 011-1h1z" /></svg> {/* Ruler */}

                    {/* Bottom Right Area */}
                    <svg className="absolute bottom-10 right-10 w-24 h-24 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> {/* Flask */}
                    <svg className="absolute bottom-24 right-1/4 w-12 h-12 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> {/* Cap */}
                    <svg className="absolute bottom-1/2 right-12 w-14 h-14 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> {/* Book (Smaller) */}
                </div>

                <div className="max-w-md mx-auto relative z-10 w-full">
                    <PricingCard />
                </div>
            </Section>

            {/* Timeline */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-soft flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Left - Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-3xl bg-[#8B2332]/10 flex items-center justify-center transform rotate-3">
                                <svg
                                    className="w-10 h-10 text-[#8B2332]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-display-sm font-display font-bold text-foreground">
                                {t('timeline.title')}
                            </h2>
                            <p className="mt-3 text-lg text-foreground-secondary leading-relaxed">
                                {t('timeline.description')}
                            </p>

                            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-[#8B2332] font-semibold">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('timeline.period')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Private Tutoring Add-on */}
            <Section background="secondary">
                <div className="max-w-2xl mx-auto">
                    <div className="p-8 bg-white rounded-2xl border border-border shadow-soft">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-coral/10 text-coral rounded-xl flex-shrink-0">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-semibold text-foreground">
                                    {t('addon.title')}
                                </h3>
                                <p className="mt-2 text-foreground-secondary">
                                    {t('addon.description')}
                                </p>
                                <p className="mt-4 text-sm text-foreground-muted italic">
                                    {t('addon.note')}
                                </p>
                                <div className="mt-6">
                                    <Button href="#contact" variant="outline" size="sm">
                                        {t('addon.cta')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact Form */}
            <Section id="contact">
                <div className="max-w-lg mx-auto">
                    <SectionHeader
                        title={tContact('title')}
                        description={tContact('description')}
                    />
                    <ContactForm />
                </div>
            </Section>
        </>
    );
}
