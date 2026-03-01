'use client';

import { useState } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`rounded-xl border transition-all duration-300 ${openIndex === index
                            ? 'border-burgundy/30 bg-burgundy/5 shadow-soft'
                            : 'border-border bg-transparent'
                        }`}
                >
                    <button
                        className="w-full flex items-center justify-between gap-4 p-5 text-left focus-ring rounded-xl"
                        onClick={() => toggle(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span
                            className={`font-display font-semibold transition-colors ${openIndex === index ? 'text-burgundy' : 'text-foreground'
                                }`}
                        >
                            {item.question}
                        </span>
                        <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                    ? 'bg-burgundy text-white rotate-180'
                                    : 'bg-background-tertiary text-foreground-secondary'
                                }`}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </span>
                    </button>

                    <div
                        className={`grid transition-all duration-300 ${openIndex === index
                                ? 'grid-rows-[1fr] opacity-100'
                                : 'grid-rows-[0fr] opacity-0'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-foreground-secondary leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
