'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './Button';

export function ContactForm() {
    const t = useTranslations('contact.form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
    };

    if (isSuccess) {
        return (
            <div className="p-8 bg-burgundy/5 border-2 border-burgundy/20 rounded-2xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-burgundy"
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
                <p className="text-lg font-display font-semibold text-foreground">
                    {t('success')}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                >
                    {t('name')}
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl text-foreground placeholder-foreground-muted focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Jean"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                >
                    {t('email')}
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl text-foreground placeholder-foreground-muted focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="jean@example.com"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                >
                    {t('message')}
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl text-foreground placeholder-foreground-muted focus:outline-none focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 transition-all resize-none"
                    placeholder="Je voudrais en savoir plus..."
                />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? (
                    <>
                        <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Envoi...
                    </>
                ) : (
                    <>
                        {t('submit')}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </>
                )}
            </Button>
        </form>
    );
}
