import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/Hero';
import { Section, SectionHeader } from '@/components/Section';
import { FeatureCard, StatCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';

// Icons
const IconPace = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const IconAutonomy = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IconFoundations = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

const IconCompetition = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconLessons = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const IconExercises = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const IconZoom = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const IconCommunity = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
);

const IconCheck = () => (
    <svg className="w-5 h-5 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const IconQuote = () => (
    <svg className="w-8 h-8 text-burgundy/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <HomePageContent />;
}

function HomePageContent() {
    const t = useTranslations();

    // Get audience points as array
    const audiencePoints = t.raw('audience.points') as string[];

    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Why EPFL is demanding - with campus image */}
            <Section id="why" background="secondary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-elevated">
                            <Image
                                src="/images/campus.jpg"
                                alt="EPFL Campus"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-burgundy/10 -z-10" />
                        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-gold/30" />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-burgundy bg-burgundy/10 rounded-full">
                            {t('why.label')}
                        </span>
                        <h2 className="text-display-sm lg:text-display-md font-display font-bold text-foreground">
                            {t('why.title')}
                        </h2>
                        <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
                            {t('why.description')}
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <StatCard
                                icon={<IconPace />}
                                title={t('why.points.pace.title')}
                                description={t('why.points.pace.description')}
                            />
                            <StatCard
                                icon={<IconAutonomy />}
                                title={t('why.points.autonomy.title')}
                                description={t('why.points.autonomy.description')}
                            />
                            <StatCard
                                icon={<IconFoundations />}
                                title={t('why.points.foundations.title')}
                                description={t('why.points.foundations.description')}
                            />
                            <StatCard
                                icon={<IconCompetition />}
                                title={t('why.points.competition.title')}
                                description={t('why.points.competition.description')}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Our Method - with online learning image */}
            <Section id="method">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-burgundy bg-burgundy/10 rounded-full">
                            {t('method.label')}
                        </span>
                        <h2 className="text-display-sm lg:text-display-md font-display font-bold text-foreground">
                            {t('method.title')}
                        </h2>
                        <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
                            {t('method.description')}
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FeatureCard
                                icon={<IconLessons />}
                                title={t('method.features.lessons.title')}
                                description={t('method.features.lessons.description')}
                            />
                            <FeatureCard
                                icon={<IconExercises />}
                                title={t('method.features.exercises.title')}
                                description={t('method.features.exercises.description')}
                            />
                            <FeatureCard
                                icon={<IconZoom />}
                                title={t('method.features.zoom.title')}
                                description={t('method.features.zoom.description')}
                            />
                            <FeatureCard
                                icon={<IconCommunity />}
                                title={t('method.features.community.title')}
                                description={t('method.features.community.description')}
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-elevated glow-burgundy">
                            <Image
                                src="/images/online-learning.png"
                                alt="Online learning session"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-white rounded-2xl shadow-medium border border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-burgundy/10 flex items-center justify-center">
                                    <IconZoom />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Zoom hebdo</p>
                                    <p className="text-xs text-foreground-muted">Chaque semaine</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold/20 blur-xl" />
                    </div>
                </div>
            </Section>

            {/* For Whom */}
            <Section background="secondary" className="relative overflow-hidden">
                {/* Animated decorative shapes on the sides */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Left side decorations */}
                    <div className="absolute top-20 left-[5%] w-16 h-16 rounded-full border-2 border-[#8B2332]/20 animate-float-slow" />
                    <div className="absolute top-1/3 left-[8%] w-8 h-8 rounded-full bg-[#8B2332]/10 animate-float-slower animation-delay-300" />
                    <div className="absolute bottom-1/4 left-[3%] w-12 h-12 rounded-full border border-gold/30 animate-float-slow animation-delay-500" />
                    <div className="absolute bottom-20 left-[10%] w-6 h-6 rounded-full bg-gold/20 animate-float-slower animation-delay-200" />

                    {/* Right side decorations */}
                    <div className="absolute top-16 right-[6%] w-12 h-12 rounded-full border-2 border-gold/20 animate-float-slower" />
                    <div className="absolute top-1/2 right-[4%] w-10 h-10 rounded-full bg-[#8B2332]/10 animate-float-slow animation-delay-400" />
                    <div className="absolute bottom-1/3 right-[8%] w-14 h-14 rounded-full border border-[#8B2332]/15 animate-float-slower animation-delay-600" />
                    <div className="absolute bottom-16 right-[5%] w-8 h-8 rounded-full bg-gold/15 animate-float-slow animation-delay-100" />
                </div>

                <SectionHeader
                    label={t('audience.label')}
                    title={t('audience.title')}
                    description={t('audience.description')}
                />

                <div className="max-w-2xl mx-auto relative">
                    <ul className="space-y-4">
                        {audiencePoints.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-soft card-hover"
                            >
                                <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                                    <IconCheck />
                                </div>
                                <span className="text-foreground pt-1">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            {/* Our Story - Who We Are */}
            <Section>
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#8B2332] bg-[#8B2332]/10 rounded-full border border-[#8B2332]/20">
                        {t('social.label')}
                    </span>
                    <h2 className="text-display-sm lg:text-display-md font-display font-bold text-foreground">
                        {t('social.title')}
                    </h2>
                </div>

                {/* Story content */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        {/* Left - The problem */}
                        <div className="bg-[#f8f5f2] rounded-3xl p-8 border border-[#e8e2dc]">
                            <div className="w-14 h-14 rounded-2xl bg-[#8B2332]/10 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-[#8B2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-4">Notre expérience</h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                {t('social.description')}
                            </p>
                        </div>

                        {/* Right - The mission */}
                        <div className="bg-[#f8f5f2] rounded-3xl p-8 border border-[#e8e2dc]">
                            <div className="w-14 h-14 rounded-2xl bg-[#8B2332]/10 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-[#8B2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-4">Notre mission</h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                {t('social.story')}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Strip */}
            <Section className="relative overflow-hidden">
                {/* Solid red background */}
                <div className="absolute inset-0 bg-[#8B2332]" />

                {/* Animated floating shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float-slow" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C6A962]/20 blur-2xl animate-float-slower" />
                    <div className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border-2 border-white/10 animate-float-slow animation-delay-300" />
                    <div className="absolute bottom-1/4 right-[15%] w-16 h-16 rounded-full bg-white/5 animate-float-slower animation-delay-500" />
                </div>

                <div className="relative text-center py-8">
                    <h2 className="text-display-sm lg:text-display-md font-display font-bold text-white">
                        {t('cta_strip.title')}
                    </h2>
                    <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
                        {t('cta_strip.description')}
                    </p>
                    <div className="mt-8">
                        <Button href="/pricing" variant="secondary" size="lg">
                            {t('cta_strip.cta')}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Contact Form */}
            <Section id="contact" background="secondary">
                <div className="max-w-lg mx-auto">
                    <SectionHeader
                        title={t('contact.title')}
                        description={t('contact.description')}
                    />
                    <ContactForm />
                </div>
            </Section>
        </>
    );
}
