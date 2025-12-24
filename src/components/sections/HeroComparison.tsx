"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Wrench, Cpu, Brain, Users } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useDeepDive } from '@/context/DeepDiveContext';
import Link from 'next/link';

// Feature Data
const features = [
    { id: 'compliance', label: "AS9100/AQAP Compliance", icon: ShieldCheck, color: "text-teal-400" },
    { id: 'revision', label: "Dynamic Revision Lock", icon: Lock, color: "text-teal-400" },
    { id: 'calibration', label: "Calibration Shield", icon: Wrench, color: "text-teal-400" },
    { id: 'genealogy', label: "Digital Genealogy (IIoT)", icon: Cpu, color: "text-teal-400" },
    { id: 'bidding', label: "AI Smart Bidding", icon: Brain, color: "text-teal-400" },
    { id: 'interlock', label: "Supplier Interlock", icon: Users, color: "text-teal-400" },
];

export function HeroComparison() {
    const { activeFeatureId, openDeepDive, closeDeepDive } = useDeepDive();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [lineCoordinates, setLineCoordinates] = useState<{ x: number, y: number }[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const updateCoordinates = () => {
            if (!containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();

            const coords = features.map((_, index) => {
                const item = itemRefs.current[index];
                if (!item) return { x: 0, y: 0 };

                const itemRect = item.getBoundingClientRect();

                return {
                    x: itemRect.right - containerRect.left + 20,
                    y: itemRect.top - containerRect.top + (itemRect.height / 2)
                };
            });
            setLineCoordinates(coords);
        };

        const timer = setTimeout(updateCoordinates, 100);
        window.addEventListener('resize', updateCoordinates);
        return () => {
            window.removeEventListener('resize', updateCoordinates);
            clearTimeout(timer);
        };
    }, []);

    // Helper: Map active ID to index for visual effects
    const activeIndex = features.findIndex(f => f.id === activeFeatureId);

    const handleFeatureClick = (index: number) => {
        const featureId = features[index].id;
        if (activeIndex === index) {
            closeDeepDive();
        } else {
            openDeepDive(featureId);
        }
    };

    return (
        <Section className="relative overflow-hidden min-h-screen flex items-center bg-teal-900 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className={`container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full transition-all duration-500 ${activeIndex !== -1 ? 'lg:translate-x-[-15%]' : ''}`}>

                {/* Left Side: Minimalist Text List & Connecting Lines */}
                <div ref={containerRef} className="relative flex flex-col justify-center h-full order-2 lg:order-1 items-center lg:items-start">
                    <div className="space-y-8 relative z-10 lg:pl-8 flex flex-col items-center lg:items-end w-full max-w-[380px]" role="list">
                        {features.map((feature, index) => (
                            <motion.button
                                key={feature.id}
                                ref={el => { itemRefs.current[index] = el }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => handleFeatureClick(index)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleFeatureClick(index); }}
                                // ACCESSIBILITY ATTRIBUTES
                                role="listitem"
                                aria-expanded={activeIndex === index}
                                aria-controls={`drawer-${feature.id}`}
                                aria-label={`View details for ${feature.label}`}
                                className="group cursor-pointer relative z-20 w-full flex justify-center lg:justify-end lg:pr-4 text-center lg:text-right focus:outline-none focus:ring-2 focus:ring-teal-400/50 rounded-lg"
                            >
                                <span
                                    className={`
                                        font-medium text-lg tracking-wide transition-all duration-300 relative
                                        ${activeIndex === index ? 'text-teal-400 scale-105 font-bold shadow-teal-400/50' : ''}
                                        ${hoveredIndex === index && activeIndex !== index ? 'text-teal-400 scale-105' : ''}
                                        ${activeIndex !== index && hoveredIndex !== index ? 'text-teal-100' : ''}
                                    `}
                                >
                                    {feature.label}
                                    {/* Hover Underline Effect */}
                                    <span className={`block h-px bg-teal-400 transition-all duration-300 ${hoveredIndex === index || activeIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'} absolute bottom-0 right-0`}></span>
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* SVG Connector Overlay */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block overflow-visible z-0">
                        <defs>
                            <linearGradient id="neon-flow-gradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(29, 228, 222, 0)" />
                                <stop offset="50%" stopColor="rgba(29, 228, 222, 1)" />
                                <stop offset="100%" stopColor="rgba(29, 228, 222, 0)" />
                            </linearGradient>
                            <linearGradient id="neon-active-gradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(17, 211, 205, 0)" />
                                <stop offset="50%" stopColor="rgba(17, 211, 205, 1)" />
                                <stop offset="100%" stopColor="rgba(17, 211, 205, 0)" />
                            </linearGradient>

                            <filter id="intense-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {lineCoordinates.length > 0 && features.map((_, index) => {
                            const start = lineCoordinates[index];
                            if (!start) return null;

                            const startX = start.x;
                            const startY = start.y;

                            const endX = 800;
                            const endY = (containerRef.current?.clientHeight || 600) / 2;

                            const cp1X = startX + 150;
                            const cp1Y = startY;
                            const cp2X = endX - 150;
                            const cp2Y = endY;

                            const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

                            const isHovered = hoveredIndex === index;
                            const isActive = activeIndex === index;

                            // Speeds: Active is super fast (1s), Hover is fast (base/2), Normal is slow
                            const baseDuration = 3 + (index * 0.4) % 2;
                            const duration = isActive ? 1 : (isHovered ? baseDuration / 2 : baseDuration);
                            const strokeWidth = isActive ? 4 : (isHovered ? 3 : 1.5);
                            const strokeUrl = isActive ? "url(#neon-active-gradient)" : "url(#neon-flow-gradient)";

                            return (
                                <g key={index}>
                                    <path
                                        d={pathD}
                                        fill="none"
                                        stroke="rgba(29, 228, 222, 0.05)"
                                        strokeWidth="1"
                                    />
                                    <motion.path
                                        d={pathD}
                                        fill="none"
                                        stroke={strokeUrl}
                                        strokeWidth={strokeWidth}
                                        strokeDasharray="40 300"
                                        strokeLinecap="round"
                                        filter="url(#intense-glow)"
                                        initial={{ strokeDashoffset: 340 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{
                                            duration: duration,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        style={{ willChange: "transform" }}
                                    />
                                </g>
                            );
                        })}
                    </svg>
                </div>

                {/* Right Side: Logo & CTA */}
                <div className="relative flex flex-col items-center justify-center text-center order-1 lg:order-2 mb-12 lg:mb-0">

                    {/* Reactive Logo Backlight */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none transition-all duration-500">
                        <div
                            className={`
                                w-[300px] h-[300px] rounded-full blur-[80px] transition-all duration-300 mx-auto
                                ${activeIndex !== -1 ? 'opacity-90 scale-150 bg-teal-500/40' : (hoveredIndex !== null ? 'opacity-80 scale-125' : 'opacity-20 scale-100')}
                            `}
                            style={{
                                background: activeIndex !== -1 ? undefined : 'radial-gradient(circle, rgba(29, 228, 222, 0.6) 0%, rgba(0, 25, 27, 0) 70%)',
                            }}
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10"
                    >
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-teal-700 drop-shadow-[0_0_30px_rgba(29,228,222,0.3)]">
                            ARKUN
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-400 font-light tracking-widest uppercase mt-4">
                            Visioning the Future of Defense
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 flex flex-col sm:flex-row gap-6 relative z-10"
                    >
                        <Link href="/dashboards">
                            <Button size="lg" className="bg-teal-400 text-teal-900 hover:bg-teal-300 shadow-[0_0_20px_rgba(29,228,222,0.4)]">
                                CHECK DEMO
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* Drawer removed from here, now in Page layout via Provider */}
        </Section>
    );
}
