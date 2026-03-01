'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === 'fr' ? 'en' : 'fr';
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground-secondary hover:text-burgundy border border-border hover:border-burgundy/30 rounded-lg transition-all duration-200 focus-ring"
            aria-label={`Switch to ${locale === 'fr' ? 'English' : 'French'}`}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{locale === 'fr' ? 'EN' : 'FR'}</span>
        </button>
    );
}
