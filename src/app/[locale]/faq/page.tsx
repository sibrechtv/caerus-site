import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';

export default async function FAQPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FAQPageContent />;
}

function FAQPageContent() {
    const t = useTranslations('faq');

    const items = t.raw('items') as Array<{
        question: string;
        answer: string;
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

            {/* FAQ Accordion */}
            <Section background="secondary">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl border border-border shadow-soft p-6 lg:p-8">
                        <Accordion items={items} />
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-display-sm font-display font-bold text-foreground">
                        Encore des questions ?
                    </h2>
                    <p className="mt-4 text-foreground-secondary">
                        N&apos;hésitez pas à nous contacter, nous serons ravis de vous répondre.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/#contact">Nous contacter</Button>
                        <Button href="/pricing" variant="outline">
                            Voir les tarifs
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
