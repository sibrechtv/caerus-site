import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    children: ReactNode;
    background?: 'default' | 'secondary' | 'tertiary' | 'dark' | 'brand';
    className?: string;
}

export function Section({
    id,
    children,
    background = 'default',
    className = '',
}: SectionProps) {
    const backgroundStyles = {
        default: 'bg-background',
        secondary: 'bg-background-secondary',
        tertiary: 'bg-background-tertiary',
        dark: 'bg-background-dark text-white',
        brand: 'bg-[#8B2332] text-white',
    };

    return (
        <section
            id={id}
            className={`section-padding ${backgroundStyles[background]} ${className}`}
        >
            <div className="section-container">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    align?: 'center' | 'left';
}

export function SectionHeader({
    label,
    title,
    description,
    align = 'center',
}: SectionHeaderProps) {
    const alignStyles = {
        center: 'text-center max-w-2xl mx-auto',
        left: 'text-left',
    };

    return (
        <div className={`mb-12 ${alignStyles[align]}`}>
            {label && (
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-burgundy bg-burgundy/10 rounded-full">
                    {label}
                </span>
            )}
            <h2 className="text-display-sm lg:text-display-md font-display font-bold text-foreground">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
