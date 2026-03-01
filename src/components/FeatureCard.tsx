import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <article className="group p-5 bg-white rounded-2xl border border-border shadow-soft card-hover">
            <div className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-xl mb-4 group-hover:text-[#8B2332] transition-colors duration-300">
                {icon}
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {title}
            </h3>
            <p className="text-base text-foreground-secondary leading-relaxed">
                {description}
            </p>
        </article>
    );
}

interface StatCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function StatCard({ icon, title, description }: StatCardProps) {
    return (
        <article className="group p-5 rounded-xl border border-border bg-white hover:shadow-soft transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-lg flex-shrink-0 group-hover:text-[#8B2332] transition-colors duration-300">
                    {icon}
                </div>
                <div>
                    <h3 className="font-display font-semibold text-foreground text-base mb-1">
                        {title}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}
