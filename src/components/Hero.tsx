'use client';

import { useTranslations } from 'next-intl';
import { Button } from './Button';
import Image from 'next/image';

export function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative overflow-hidden bg-background">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large burgundy glow */}
                <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-burgundy/10 via-burgundy/5 to-transparent blur-3xl animate-float-slow" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gold/10 via-gold/5 to-transparent blur-3xl animate-float-slower" />

                {/* Decorative circles */}
                <div className="absolute top-1/4 right-[15%] w-24 h-24 rounded-full border-2 border-burgundy/10 animate-float-slow animation-delay-300" />
                <div className="absolute bottom-1/3 left-[10%] w-16 h-16 rounded-full border border-gold/20 animate-float-slower animation-delay-500" />
                <div className="absolute top-1/3 left-[20%] w-8 h-8 rounded-full bg-burgundy/5 animate-float-slow animation-delay-200" />

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-pattern opacity-50" />
            </div>

            <div className="section-container relative">
                <div className="py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left content */}
                        <div className="max-w-xl">
                            {/* Main headline */}
                            <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-display font-bold text-foreground animate-fade-in-up">
                                <span className="block">{t('title_line1')}</span>
                                <span className="gradient-text">{t('title_line2')}</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 text-lg lg:text-xl text-foreground-secondary leading-relaxed animate-fade-in-up animation-delay-200">
                                {t('subtitle')}
                            </p>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animation-delay-400">
                                <Button href="/pricing" size="lg">
                                    {t('cta_primary')}
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button href="#method" variant="outline" size="lg">
                                    {t('cta_secondary')}
                                </Button>
                            </div>
                        </div>

                        {/* Right - Hero Image (no floating math image) */}
                        <div className="relative lg:h-[600px] animate-fade-in animation-delay-300">
                            {/* Main image card */}
                            <div className="relative rounded-3xl overflow-hidden shadow-elevated glow-burgundy">
                                <Image
                                    src="/images/hero-students.png"
                                    alt="EPFL students studying together"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent" />

                                {/* Floating stat card */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-medium">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-foreground-muted">Programme complet</p>
                                            <p className="text-lg font-display font-bold text-foreground">Juin → Septembre</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements (removed floating math image) */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold/20 blur-2xl" />
                            <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full border-2 border-burgundy/20 animate-float-slower" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
