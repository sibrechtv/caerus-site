'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export function Footer() {
    const t = useTranslations('footer');

    const navLinks = [
        { href: '/', label: t('links.home') },
        { href: '/pricing', label: t('links.pricing') },
        { href: '/about', label: t('links.about') },
        { href: '/faq', label: t('links.faq') },
    ];

    return (
        <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/50 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-burgundy/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="section-container relative">
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/images/logo.png"
                                    alt="Caerus"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain brightness-0 invert"
                                />
                                <span className="font-display font-bold text-2xl">Caerus</span>
                            </div>
                            <p className="text-white/70 max-w-sm leading-relaxed">
                                {t('description')}
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="font-display font-semibold text-white mb-4">
                                {t('links.title')}
                            </h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-display font-semibold text-white mb-4">
                                {t('contact.title')}
                            </h4>
                            <a
                                href={`mailto:${t('contact.email')}`}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                {t('contact.email')}
                            </a>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/50">{t('copyright')}</p>
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-white/50 hover:text-white transition-colors"
                            >
                                {t('legal.privacy')}
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-white/50 hover:text-white transition-colors"
                            >
                                {t('legal.terms')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
