import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary brand color - Burgundy from logo
                burgundy: {
                    DEFAULT: '#8B2332',
                    light: '#A63346',
                    lighter: '#C24A5C',
                    dark: '#6E1C28',
                    darker: '#501418',
                },
                // Secondary accent - Gold/Cream
                gold: {
                    DEFAULT: '#C6A962',
                    light: '#D4BE8A',
                    dark: '#A38B4E',
                },
                // Backgrounds
                background: {
                    DEFAULT: '#FFFDF9',
                    secondary: '#FBF7F0',
                    tertiary: '#F5EFE6',
                    dark: '#1A1718',
                },
                // Text colors
                foreground: {
                    DEFAULT: '#1A1718',
                    secondary: '#4A4446',
                    muted: '#7A7678',
                },
                // Utility
                border: '#E8E2D9',
                ring: '#8B2332',
            },
            fontFamily: {
                display: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
                body: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
                'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'display-xs': ['1.875rem', { lineHeight: '1.25', fontWeight: '600' }],
            },
            spacing: {
                section: '6rem',
                'section-sm': '4rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 2px 8px -2px rgba(139, 35, 50, 0.08), 0 4px 16px -4px rgba(139, 35, 50, 0.05)',
                'medium': '0 4px 12px -2px rgba(139, 35, 50, 0.1), 0 8px 24px -4px rgba(139, 35, 50, 0.08)',
                'elevated': '0 8px 24px -4px rgba(139, 35, 50, 0.12), 0 16px 48px -8px rgba(139, 35, 50, 0.1)',
                'glow': '0 0 40px rgba(139, 35, 50, 0.15)',
                'glow-gold': '0 0 40px rgba(198, 169, 98, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-in': 'slideIn 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'blob': 'blob 7s infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-pattern': 'radial-gradient(circle at 1px 1px, rgba(139, 35, 50, 0.03) 1px, transparent 0)',
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
};

export default config;
