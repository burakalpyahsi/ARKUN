"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { useDeepDive } from '@/context/DeepDiveContext';
import { ShieldCheck, Lock, Wrench, Cpu, Brain, Users, Box, FileCheck, ArrowUpRight } from 'lucide-react';

const defenseModules = [
    {
        id: 'revision',
        title: "Dynamic Revision Lock",
        tag: "Financial Risk",
        detail: "Obsolete drawing production rate: 0%. Comparison: 15% cost savings on rework.",
        compliance: "AS9100 Scenario 1",
        icon: Lock
    },
    {
        id: 'calibration',
        title: "Calibration & Competency Shield",
        tag: "Legal Compliance",
        detail: "Blocks uncalibrated devices & unauthorized operators from the system.",
        compliance: "Clause 7.1.5",
        icon: Wrench
    },
    {
        id: 'genealogy',
        title: "Digital Genealogy (IIoT)",
        tag: "Traceability",
        detail: "Digital Genealogy sealed with MTConnect/OPC UA integration. CNC & Heat Treat data embedded.",
        compliance: "NATO AQAP Standards",
        icon: Cpu
    },
    {
        id: 'bidding',
        title: "AI Smart Bidding",
        tag: "Intelligence",
        detail: "Data-driven cost prediction analyzing real production variance.",
        compliance: "Preventing Under/Over Bidding",
        icon: Brain
    },
    {
        id: 'shadow_inventory',
        title: "Shadow Inventory (GFE)",
        tag: "Resource Management",
        detail: "Isolates customer-owned assets (GFE) from company inventory to manage tax risks.",
        compliance: "Government Furnished Equipment",
        icon: Box
    },
    {
        id: 'quality_loop',
        title: "Structured NCR/CAPA/ECO",
        tag: "Quality Loop",
        detail: "Links corrective actions (CAPA) directly to engineering changes (ECO).",
        compliance: "Closed-Loop Quality",
        icon: FileCheck
    }
];

export function CoreDefenseGrid() {
    const { openDeepDive } = useDeepDive();

    return (
        <Section className="py-24 bg-teal-900/50 relative border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-mono text-teal-400 tracking-widest uppercase mb-4">
                        Phase 5: Full Feature Ecosystem
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Core Defense Capabilities
                    </h3>
                    <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full" />
                </div>

                {/* 6-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defenseModules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-teal-800 border border-teal-700 p-8 rounded-xl hover:border-teal-400/30 hover:bg-teal-700 transition-all group flex flex-col h-full relative overflow-hidden"
                        >
                            {/* Hover Reveal Gradient */}
                            <div className="absolute inset-0 bg-linear-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="p-3 bg-teal-900 rounded-lg border border-teal-700 text-teal-400 group-hover:text-teal-300 group-hover:border-teal-400/20 transition-colors">
                                    <module.icon size={24} />
                                </div>
                                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest border border-teal-700 px-2 py-1 rounded bg-teal-900">
                                    {module.tag}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold text-teal-100 group-hover:text-white mb-3 transition-colors relative z-10">
                                {module.title}
                            </h4>

                            <p className="text-teal-200 text-sm leading-relaxed mb-6 flex-grow: 1 relative z-10">
                                {module.detail}
                            </p>

                            <div className="pt-6 border-t border-teal-700 relative z-10 mt-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs text-teal-400 font-mono">
                                        {module.compliance}
                                    </span>
                                </div>
                                <button
                                    onClick={() => openDeepDive(module.id)}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-teal-900 border border-teal-600 hover:bg-teal-800/30 hover:border-teal-400/50 hover:text-teal-400 text-teal-200 text-sm font-medium transition-all group/btn"
                                >
                                    View Operational Scenario
                                    <ArrowUpRight size={14} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Academic Footer */}
                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <h4 className="text-xs font-mono text-teal-500 uppercase tracking-widest mb-4">
                        Scientific Foundation
                    </h4>
                    <p className="text-teal-400 text-xs max-w-2xl mx-auto leading-relaxed font-serif italic">
                        "The integration of transport logistics and supply chain systems..." - Sanchez-Rodrigues, Potter, & Naim (2010). <br />
                        "Traceability optimization in aerospace manufacturing..." - International Journal of Production Economics.
                    </p>
                </div>
            </div>
        </Section>
    );
}
