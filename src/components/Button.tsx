'use client';

import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from '@/i18n/routing';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
}

type ButtonAsButton = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: undefined;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-[#8B2332] text-white shadow-medium hover:bg-[#6E1C28] hover:shadow-elevated border-0',
    secondary:
        'bg-white text-[#8B2332] border-2 border-[#8B2332] hover:bg-[#8B2332] hover:text-white shadow-soft',
    outline:
        'bg-transparent text-[#8B2332] border-2 border-[#8B2332] hover:bg-[#8B2332] hover:text-white',
    ghost:
        'bg-transparent text-[#8B2332] hover:bg-[#8B2332]/10',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-5 py-2.5 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if ('href' in props && props.href) {
        const { href, ...linkProps } = props;
        return (
            <Link href={href} className={combinedStyles} {...linkProps}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...(props as ButtonAsButton)}>
            {children}
        </button>
    );
}
