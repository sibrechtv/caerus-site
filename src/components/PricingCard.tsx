'use client';

import { useTranslations } from 'next-intl';
import { Button } from './Button';

export function PricingCard() {
    const t = useTranslations('pricing.card');

    const features = t.raw('features') as string[];

    return (
        <div className="relative p-8 bg-white rounded-3xl border-2 border-burgundy/20 shadow-elevated overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse-slow delay-700" />

            <div className="relative">
                {/* Label */}
                <span className="inline-block px-4 py-1.5 text-sm font-semibold text-burgundy bg-burgundy/10 rounded-full mb-6">
                    {t('label')}
                </span>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl lg:text-6xl font-display font-bold text-foreground">
                        {t('price')}
                    </span>
                    <span className="text-2xl font-display font-semibold text-foreground-secondary">
                        {t('currency')}
                    </span>
                    <span className="text-lg text-foreground-muted ml-1">
                        {t('period')}
                    </span>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary mb-8">
                    {t('description')}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg
                                    className="w-4 h-4 text-burgundy"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span className="text-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Button href="#contact" className="w-full" size="lg">
                    {t('cta')}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Button>
            </div>
        </div>
    );
}
