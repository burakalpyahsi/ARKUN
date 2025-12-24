"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ZoomIn, ArrowLeft, Monitor } from 'lucide-react';

// Dashboard data with images from public/all-dashboards/
const dashboards = [
    {
        id: 'overview',
        name: 'Overview Dashboard',
        description: 'Central command view with real-time KPIs, alerts, and system-wide status monitoring.',
        image: '/all-dashboards/Overview.png',
        category: 'Core'
    },
    {
        id: 'risk',
        name: 'Risk Management Cockpit',
        description: 'Proactive risk identification, assessment matrix, and mitigation tracking aligned with AS9100.',
        image: '/all-dashboards/Risk.png',
        category: 'Compliance'
    },
    {
        id: 'audits',
        name: 'Audit Management',
        description: 'Internal and external audit scheduling, findings tracking, and corrective action closure.',
        image: '/all-dashboards/Audits.png',
        category: 'Quality'
    },
    {
        id: 'capa',
        name: 'CAPA Management',
        description: 'Corrective and Preventive Actions workflow with root cause analysis and effectiveness tracking.',
        image: '/all-dashboards/Capa.png',
        category: 'Quality'
    },
    {
        id: 'competency',
        name: 'Competency Matrix',
        description: 'Operator skill tracking, certification management, and training requirement alerts.',
        image: '/all-dashboards/Competency.png',
        category: 'Operations'
    },
    {
        id: 'configuration',
        name: 'Configuration Management',
        description: 'Engineering change control, revision management, and configuration baseline tracking.',
        image: '/all-dashboards/Configuration.png',
        category: 'Engineering'
    },
    {
        id: 'documents',
        name: 'Document Library',
        description: 'Controlled document repository with version control, approvals, and distribution tracking.',
        image: '/all-dashboards/Documents.png',
        category: 'Core'
    },
    {
        id: 'export-control',
        name: 'Export Control Compliance',
        description: 'ITAR/EAR compliance tracking, license management, and controlled access monitoring.',
        image: '/all-dashboards/Export controlk.png',
        category: 'Compliance'
    },
    {
        id: 'fai1',
        name: 'First Article Inspection',
        description: 'AS9102 FAI forms, characteristic tracking, and balloon drawing management.',
        image: '/all-dashboards/Fai1.png',
        category: 'Quality'
    },
    {
        id: 'fai2',
        name: 'FAI Details View',
        description: 'Detailed inspection results, measurement data, and approval workflow.',
        image: '/all-dashboards/Fai2.png',
        category: 'Quality'
    },
    {
        id: 'gfe',
        name: 'Government Furnished Equipment',
        description: 'GFE tracking, custody chain, and government property accountability.',
        image: '/all-dashboards/GFE.png',
        category: 'Operations'
    },
    {
        id: 'ncrs',
        name: 'Non-Conformance Reports',
        description: 'NCR creation, disposition workflow, and material review board integration.',
        image: '/all-dashboards/Ncrs.png',
        category: 'Quality'
    },
    {
        id: 'smart-bidding',
        name: 'AI Smart Bidding Analytics',
        description: 'AI-powered cost estimation, historical variance analysis, and competitive pricing insights.',
        image: '/all-dashboards/Smart Bidding.png',
        category: 'Intelligence'
    },
    {
        id: 'tools',
        name: 'Tool Life & Calibration',
        description: 'Calibration scheduling, tool life tracking, and preventive maintenance alerts.',
        image: '/all-dashboards/Tools.png',
        category: 'Operations'
    },
    {
        id: 'traceability',
        name: 'Digital Traceability',
        description: 'Full genealogy tracking, lot/serial management, and supply chain visibility.',
        image: '/all-dashboards/Traceability.png',
        category: 'Core'
    },
    {
        id: 'workstation',
        name: 'My Workstation',
        description: 'Personalized operator view with assigned tasks, work instructions, and quality gates.',
        image: '/all-dashboards/My workstation.png',
        category: 'Operations'
    },
    {
        id: 'sim-control',
        name: 'SIM Control Center',
        description: 'Simulation control and monitoring with real-time process visualization.',
        image: '/all-dashboards/Sim control center.png',
        category: 'Engineering'
    }
];

const categories = ['All', 'Core', 'Quality', 'Compliance', 'Operations', 'Engineering', 'Intelligence'];

export default function DashboardsPage() {
    const [selectedDashboard, setSelectedDashboard] = useState<typeof dashboards[0] | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const dashboardRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Handle URL hash scrolling for AI chatbot navigation
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash && dashboardRefs.current[hash]) {
                // Reset category filter to show all dashboards
                setActiveCategory('All');

                // Wait for filter to apply then scroll
                setTimeout(() => {
                    const element = dashboardRefs.current[hash];
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Add highlight effect
                        element.classList.add('ring-2', 'ring-teal-400', 'ring-offset-2', 'ring-offset-teal-900');
                        setTimeout(() => {
                            element.classList.remove('ring-2', 'ring-teal-400', 'ring-offset-2', 'ring-offset-teal-900');
                        }, 3000);
                    }
                }, 100);
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const filteredDashboards = activeCategory === 'All'
        ? dashboards
        : dashboards.filter(d => d.category === activeCategory);

    return (
        <main className="min-h-screen bg-teal-900 pt-24 pb-16">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-400 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm">Back to Home</span>
                </Link>

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Monitor className="text-teal-400" size={28} />
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                ARKUN <span className="text-teal-400">Dashboard</span> Showcase
                            </h1>
                        </div>
                        <p className="text-teal-200 text-lg max-w-2xl mx-auto">
                            Explore our comprehensive suite of operational dashboards designed for defense-grade manufacturing excellence.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex flex-wrap justify-center gap-3 mt-10"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-teal-400 text-teal-900 shadow-lg shadow-teal-400/25'
                                    : 'bg-teal-800/50 text-teal-300 hover:bg-teal-700 hover:text-white border border-teal-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Dashboard Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {hasMounted && filteredDashboards.map((dashboard, index) => (
                            <motion.div
                                key={dashboard.id}
                                id={dashboard.id}
                                ref={(el) => { dashboardRefs.current[dashboard.id] = el; }}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredId(dashboard.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelectedDashboard(dashboard)}
                                className="group cursor-pointer relative bg-teal-800/80 backdrop-blur-sm border border-teal-700 rounded-xl overflow-hidden hover:border-teal-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/10"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={dashboard.image}
                                        alt={dashboard.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-t from-teal-900 via-teal-900/60 to-transparent transition-opacity duration-300 ${hoveredId === dashboard.id ? 'opacity-90' : 'opacity-40'
                                        }`} />

                                    {/* Zoom Icon */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredId === dashboard.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                        }`}>
                                        <div className="p-4 rounded-full bg-teal-400/20 backdrop-blur-sm border border-teal-400/30">
                                            <ZoomIn className="text-teal-400" size={24} />
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-teal-900/80 backdrop-blur-sm border border-teal-600 rounded-full text-teal-400">
                                            {dashboard.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                                        {dashboard.name}
                                    </h3>
                                    <p className="text-teal-200 text-sm leading-relaxed line-clamp-2">
                                        {dashboard.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-10 border-t border-teal-700 text-center"
                >
                    <div className="flex justify-center gap-12 flex-wrap">
                        <div>
                            <div className="text-3xl font-bold text-teal-400">{dashboards.length}</div>
                            <div className="text-sm text-teal-300 mt-1">Operational Dashboards</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-teal-400">6</div>
                            <div className="text-sm text-teal-300 mt-1">Functional Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-teal-400">AS9100</div>
                            <div className="text-sm text-teal-300 mt-1">Compliance Ready</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {selectedDashboard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-900/95 backdrop-blur-md"
                        onClick={() => setSelectedDashboard(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-6xl w-full bg-teal-800 border border-teal-600 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedDashboard(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-teal-700/80 hover:bg-teal-600 border border-teal-500 text-teal-200 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Image */}
                            <div className="relative aspect-video">
                                <Image
                                    src={selectedDashboard.image}
                                    alt={selectedDashboard.name}
                                    fill
                                    className="object-contain bg-teal-900"
                                    sizes="100vw"
                                    priority
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-teal-700">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-teal-400/10 border border-teal-400/30 rounded-full text-teal-400 mb-3 inline-block">
                                            {selectedDashboard.category}
                                        </span>
                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            {selectedDashboard.name}
                                        </h2>
                                        <p className="text-teal-200 max-w-2xl">
                                            {selectedDashboard.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
