"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hexagon, Shield, FileText, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

const stats = [
    { label: "Cost Reduction in Rework", value: "15%", icon: TrendingUpIcon },
    { label: "AS9100 Clause 7.1.5", value: "100%", icon: ShieldIcon },
    { label: "Integration Tax", value: "Zero", icon: ZapIcon },
];

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
    )
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )
}
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    )
}


export function Hero() {
    return (
        <Section className="min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden bg-teal-900 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00191B_1px,transparent_1px),linear-gradient(to_bottom,#00191B_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Teal Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[150px]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-teal-800/0 via-teal-900/80 to-teal-900" />
            </div>

            <div className="container px-6 relative z-10 text-center grow flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-widest mb-8 mx-auto"
                >
                    <Shield className="w-3 h-3" />
                    <span>VISIONING THE FUTURE OF DEFENSE</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6"
                >
                    Engineering Brain & <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-teal-300 to-white">
                        Production Muscles
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-teal-200 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Sektörün köklerinden geleceğin teknolojisine. AS9100 ve AQAP standartlarını kod düzeyinde dayatan,
                    KOBİ'ler için özelleştirilmiş savunma sanayii ERP modülü.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
                >
                    <Button size="lg" className="h-14 px-8 text-base bg-accent text-teal-900 hover:bg-accent/90 shadow-[0_0_30px_rgba(29,228,222,0.3)] font-semibold">
                        <FileText className="mr-2 w-5 h-5" />
                        Teknik Raporu İncele
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-base border-teal-700 bg-teal-800/50 hover:bg-teal-700 hover:text-accent">
                        Modülleri Keşfet
                    </Button>
                </motion.div>
            </div>

            {/* Value Statistics Strip */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative z-10 w-full border-t border-white/5 bg-teal-800/30 backdrop-blur-md"
            >
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-center gap-4 group">
                                <div className="p-3 rounded-lg bg-accent/5 border border-accent/10 text-accent group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                                    <div className="text-sm text-teal-300 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Hexagons */}
            <div className="hidden md:block absolute top-1/3 right-[10%] opacity-20 animate-pulse pointer-events-none">
                <Hexagon className="w-40 h-40 text-accent" strokeWidth={0.5} />
            </div>
            <div className="hidden md:block absolute bottom-1/3 left-[10%] opacity-10 pointer-events-none">
                <Hexagon className="w-64 h-64 text-white" strokeWidth={0.2} />
            </div>
        </Section>
    );
}
