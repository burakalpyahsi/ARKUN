"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldAlert } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { translations, TranslationTree } from '@/lib/translations';

export function Pricing() {
    const { locale } = useLanguage();

    // Get the current locale's pricing data directly with proper typing
    const pricingData = translations[locale as keyof typeof translations].pricing;

    const plans: Array<{
        name: string;
        target: string;
        price: string;
        description: string;
        features: string[];
        highlight: boolean;
        badge?: string;
    }> = [
            {
                ...pricingData.plans.starter,
                highlight: false,
            },
            {
                ...pricingData.plans.pro,
                highlight: true,
            },
            {
                ...pricingData.plans.enterprise,
                highlight: false,
            }
        ];

    return (
        <Section id="pricing" className="bg-teal-900 py-24 border-t border-white/5 relative overflow-visible">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{pricingData.title}</h2>
                <p className="text-teal-200 max-w-2xl mx-auto">
                    {pricingData.subtitle}
                </p>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {plans.map((plan, index: number) => {
                        const isCustomPrice = plan.price.includes('Custom') || plan.price.includes('Özel');

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 ${plan.highlight
                                    ? 'bg-teal-800 border-accent shadow-[0_0_50px_rgba(29,228,222,0.15)] scale-105 z-10'
                                    : 'bg-teal-800/40 border-white/5 hover:border-white/10'
                                    }`}
                            >
                                {plan.highlight && plan.badge && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-teal-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-accent/20">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">{plan.target}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-teal-200 text-sm h-10">{plan.description}</p>
                                </div>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-8 grow">
                                    {plan.features.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-start text-sm text-teal-100">
                                            <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? 'text-accent' : 'text-teal-400'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.highlight ? 'default' : 'outline'}
                                    className={`w-full h-12 text-base font-semibold ${plan.highlight
                                        ? 'bg-accent text-teal-900 hover:bg-accent/90'
                                        : 'border-teal-600 text-white hover:border-white/20 hover:text-white'
                                        }`}
                                >
                                    {isCustomPrice ? pricingData.cta.contact : pricingData.cta.start}
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Integration Tax Warning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
                >
                    <div className="p-4 bg-rose-500/10 rounded-full text-rose-400 shrink-0">
                        <ShieldAlert className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{pricingData.integrationWarning.title}</h3>
                        <p className="text-teal-200 text-sm">
                            {pricingData.integrationWarning.description}
                            <span className="text-rose-400 font-semibold">{pricingData.integrationWarning.highlight}</span>
                            {pricingData.integrationWarning.suffix}
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
