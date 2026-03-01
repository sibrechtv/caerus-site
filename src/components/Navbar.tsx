'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import Image from 'next/image';

export function Navbar() {
    const t = useTranslations('nav');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/pricing', label: t('pricing') },
        { href: '/about', label: t('about') },
        { href: '/faq', label: t('faq') },
    ];

    return (
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
            <nav className="section-container">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 font-display font-bold text-xl text-foreground hover:text-burgundy transition-colors"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Caerus"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                        <span className="hidden sm:inline text-burgundy">Caerus</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-foreground-secondary hover:text-burgundy transition-colors relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy transition-all group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4 pl-4 border-l border-border">
                            <LanguageSwitcher />
                            <Button href="/pricing" size="sm">
                                {t('cta')}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground hover:text-burgundy transition-colors focus-ring rounded-lg"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border animate-fade-in">
                        <ul className="space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block py-3 px-4 text-base font-medium text-foreground-secondary hover:text-burgundy hover:bg-burgundy/5 rounded-xl transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between px-4">
                            <LanguageSwitcher />
                            <Button href="/pricing" size="sm">
                                {t('cta')}
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
