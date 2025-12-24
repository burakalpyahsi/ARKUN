"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { Info } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const stats = [
    {
        id: "STAT_01",
        label: "Rework & Scrap Savings",
        value: 15,
        suffix: "%",
        prefix: "Up to",
        context: "Obsolete drawing prevention at source.",
        citation: "Source: IEOM Society Research",
        costOfInaction: "Risk: Wasted materials & labor on outdated specs."
    },
    {
        id: "STAT_02",
        label: "Audit Success Rate",
        value: 100,
        suffix: "%",
        prefix: "Targeted",
        context: "AS9100 Clause 7.1.5 Interlock.",
        citation: "Zero-Human-Error Logic",
        costOfInaction: "Risk: Critical non-conformance findings during audits."
    },
    {
        id: "STAT_03",
        label: "Integration Tax",
        value: 0,
        suffix: "$",
        prefix: "",
        context: "Single Platform Architecture.",
        citation: "Pure SaaS Efficiency",
        costOfInaction: "Risk: Hidden middleware & API maintenance costs."
    }
];

function Counter({ value, suffix, prefix }: { value: number, suffix: string, prefix: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Ensure we are targeting a span inside the div if we want to set textContent, 
                // OR better, just use a separate ref for the number span.
                // However, the original code tried to set textContent on ref.current.
                // Let's create a specific ref for the number span to be type-safe.
                const numberSpan = ref.current.querySelector('[data-counter]');
                if (numberSpan) {
                    numberSpan.textContent = Math.floor(latest).toString();
                }
            }
        });
    }, [springValue]);

    return (
        <div className="flex flex-col items-center md:items-start" ref={ref}>
            <span className="text-sm font-mono text-teal-400/80 uppercase tracking-widest mb-1">{prefix}</span>
            <div className="flex items-baseline gap-1">
                <span data-counter className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-teal-300 to-teal-600 drop-shadow-[0_0_15px_rgba(29,228,222,0.4)]">
                    0
                </span>
                <span className="text-3xl md:text-5xl font-bold text-teal-700">{suffix}</span>
            </div>
        </div>
    );
}

export function ValueEvidenceStrip() {
    return (
        <Section className="relative py-12 md:py-20 bg-teal-900 overflow-hidden border-y border-white/5">
            {/* Carbon Fiber Texture Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `
                    radial-gradient(circle at center, transparent 0%, #00191B 100%),
                    repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px),
                    repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)
                `
            }}></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="flex flex-col items-center md:items-start pt-8 md:pt-0 md:pl-8 first:pl-0 group">
                            <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />

                            <div className="mt-4 text-center md:text-left relative w-full">
                                <h3 className="text-xl font-bold text-teal-100 mb-2">{stat.label}</h3>
                                <p className="text-teal-200 text-sm leading-relaxed mb-3">
                                    {stat.context}
                                </p>

                                {/* Hover Tooltip / Interactive Details */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-white/5 cursor-help transition-all duration-300 hover:border-teal-400/30 hover:bg-teal-700 relative group/tooltip">
                                    <Info size={14} className="text-teal-400" />
                                    <span className="text-xs text-teal-300 font-mono group-hover/tooltip:text-teal-100 transition-colors">
                                        Impact Logic
                                    </span>

                                    {/* Tooltip Content */}
                                    <div className="absolute bottom-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mb-3 w-[280px] p-4 bg-teal-900 border border-teal-400/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] opacity-0 translate-y-2 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 group-hover/tooltip:pointer-events-auto transition-all duration-300 z-50">
                                        <div className="absolute -bottom-1 left-1/2 md:left-8 -translate-x-1/2 w-2 h-2 bg-teal-900 border-r border-b border-teal-400/20 rotate-45" />
                                        <p className="text-xs font-semibold mb-1 uppercase tracking-wider text-teal-400">Cost of Inaction</p>
                                        <p className="text-teal-100 text-sm leading-snug">{stat.costOfInaction}</p>
                                        <p className="mt-3 text-[10px] text-teal-400 font-mono pt-2 border-t border-white/5">{stat.citation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
