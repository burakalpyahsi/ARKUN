"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileWarning, TrendingDown, Database, Server } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

const ReferenceTooltip = ({ children, text }: { children: React.ReactNode; text: string }) => (
    <div className="group relative inline-block cursor-help">
        {children}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-teal-800 border border-teal-700 rounded text-xs text-teal-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
            <div className="font-semibold text-accent mb-1">Academic Reference:</div>
            {text}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-teal-800"></div>
        </div>
    </div>
);

export function Features() {
    const { t } = useLanguage();

    return (
        <Section id="features" className="bg-teal-900 py-24 relative overflow-hidden">
            {/* Background Grid for War Room Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E5053_1px,transparent_1px),linear-gradient(to_bottom,#0E5053_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/20 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-4">
                        <TrendingDown className="w-4 h-4" />
                        <span>{t('features.badge')}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('features.title')} <span className="text-teal-500">{t('features.titleHighlight')}</span>
                    </h2>
                    <p className="text-teal-200 max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT COLUMN: VISUALIZATIONS */}
                    <div className="space-y-8">

                        {/* Comparison Chart */}
                        <div className="bg-teal-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <TrendingDown className="w-12 h-12 text-teal-700" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                {t('features.costAnalysis.title')}
                                <ReferenceTooltip text="Sanchez‑Rodrigues & Kumar (2020) - Impact of rework on aerospace supply chains.">
                                    <span className="text-xs text-teal-400 bg-teal-900 px-1.5 py-0.5 rounded cursor-help">REF</span>
                                </ReferenceTooltip>
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-teal-200">{t('features.costAnalysis.traditional')}</span>
                                        <span className="text-rose-400 font-mono">15% Scrap/Rework</span>
                                    </div>
                                    <div className="h-4 bg-teal-900 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "75%" }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-rose-500/50"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white font-semibold">{t('features.costAnalysis.arkun')}</span>
                                        <span className="text-accent font-mono">2% Scrap/Rework</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-accent/20 animate-pulse"></div>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "10%" }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            className="h-full bg-accent relative z-10"
                                        />
                                    </div>
                                    <p className="text-xs text-emerald-400 mt-2 font-mono">
                                        {t('features.costAnalysis.savings')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Compliance Gauge */}
                        <div className="bg-teal-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-32 h-32 shrink-0">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#1DE4DE"
                                        strokeWidth="8"
                                        strokeDasharray="283"
                                        initial={{ strokeDashoffset: 283 }}
                                        whileInView={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-white">100%</span>
                                    <span className="text-[10px] text-teal-300 uppercase">Secure</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    {t('features.compliance.title')}
                                    <ReferenceTooltip text="ISO/TC 176/SC 2 (2018) - Auditing practices for monitoring and measuring resources.">
                                        <span className="text-xs text-teal-400 bg-teal-900 px-1.5 py-0.5 rounded cursor-help">REF</span>
                                    </ReferenceTooltip>
                                </h3>
                                <p className="text-teal-200 text-sm mb-3">
                                    {t('features.compliance.description')}
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20">
                                    <Shield className="w-3 h-3" />
                                    {t('features.compliance.badge')}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: RISK TABLE */}
                    <div className="bg-teal-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-teal-900 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <FileWarning className="w-5 h-5 text-rose-500" />
                                {t('features.riskTable.title')}
                            </h3>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            </div>
                        </div>

                        <div className="p-0">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/5 text-xs text-teal-300 font-mono uppercase tracking-wider">
                                        <th className="p-4 font-medium">{t('features.riskTable.headers.scenario')}</th>
                                        <th className="p-4 font-medium">{t('features.riskTable.headers.threat')}</th>
                                        <th className="p-4 font-medium text-accent">{t('features.riskTable.headers.solution')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr className="group hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-sm text-teal-100">{t('features.riskTable.rows.oldRevision')}</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded textxs font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">
                                                <Shield className="w-4 h-4" /> {t('features.riskTable.levels.critical')}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-white font-medium">{t('features.riskTable.solutions.revisionLock')}</td>
                                    </tr>
                                    <tr className="group hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-sm text-teal-100">{t('features.riskTable.rows.uncalibratedTool')}</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded textxs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20">
                                                <Lock className="w-4 h-4" /> {t('features.riskTable.levels.high')}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-white font-medium">{t('features.riskTable.solutions.sensorBlocking')}</td>
                                    </tr>
                                    <tr className="group hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-sm text-teal-100">{t('features.riskTable.rows.unauthorizedOperator')}</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded textxs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                <Shield className="w-4 h-4" /> {t('features.riskTable.levels.medium')}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-white font-medium">{t('features.riskTable.solutions.competencyInterlock')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 bg-teal-900 border-t border-white/10">
                            <div className="flex items-center justify-center gap-3 text-xs text-teal-400 font-mono border border-teal-800 rounded py-2 px-4 bg-teal-800/50">
                                <Server className="w-4 h-4 text-emerald-500" />
                                {t('features.footer')}
                                <Database className="w-4 h-4 text-emerald-500 ml-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
