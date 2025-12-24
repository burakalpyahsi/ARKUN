"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LockKeyhole, Cpu, BrainCircuit, AlertTriangle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Modules() {
    const { t } = useLanguage();

    const modules = [
        {
            id: "MOD_01",
            titleKey: "modules.items.revisionLock.title",
            icon: ShieldCheck,
            impact_data: "15% Reduction in Scrap",
            descriptionKey: "modules.items.revisionLock.description",
            compliance: "AS9100 Clause 7.5.3",
            risk_scenario: "Risk: Obsolete Drawing Usage"
        },
        {
            id: "MOD_02",
            titleKey: "modules.items.calibrationShield.title",
            icon: LockKeyhole,
            impact_data: "Zero Audit Failure",
            descriptionKey: "modules.items.calibrationShield.description",
            compliance: "AS9100 Clause 7.1.5",
            risk_scenario: "Risk: Uncalibrated Tool Usage"
        },
        {
            id: "MOD_03",
            titleKey: "modules.items.digitalGenealogy.title",
            icon: Cpu,
            impact_data: "Real-time Traceability",
            descriptionKey: "modules.items.digitalGenealogy.description",
            compliance: "AQAP 2110",
            risk_scenario: "Risk: Missing Traceability Data"
        },
        {
            id: "MOD_04",
            titleKey: "modules.items.smartBidding.title",
            icon: BrainCircuit,
            impact_data: "Optimized Profitability",
            descriptionKey: "modules.items.smartBidding.description",
            compliance: "ISO 9001:2015",
            risk_scenario: "Risk: Underbidding Projects"
        }
    ];

    return (
        <Section id="modules" hasGrid className="bg-teal-900 py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400 uppercase text-xs font-bold tracking-widest"
                    >
                        {t('modules.badge')}
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('modules.title')} <span className="text-teal-300/50">{t('modules.titleHighlight')}</span>
                    </h2>
                    <p className="text-teal-200 max-w-2xl mx-auto">
                        {t('modules.subtitle')}
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {modules.map((module) => (
                        <motion.div
                            key={module.id}
                            variants={item}
                            className="group relative bg-teal-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500"
                        >
                            {/* Glowing Border Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
                                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-accent to-transparent" />
                            </div>

                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-teal-900 border border-white/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                        <module.icon className="w-8 h-8" />
                                    </div>
                                    <div className="px-3 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-teal-300 uppercase tracking-wider">
                                        {module.compliance}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {t(module.titleKey as any)}
                                </h3>

                                <div className="text-emerald-400 text-sm font-semibold mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    {module.impact_data}
                                </div>

                                <p className="text-teal-200 text-sm leading-relaxed mb-6 grow">
                                    {t(module.descriptionKey as any)}
                                </p>

                                {/* Risk Scenario Tooltip/Footer */}
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2 text-rose-400/80 text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                                        <AlertTriangle className="w-3 h-3" />
                                        {module.risk_scenario}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
