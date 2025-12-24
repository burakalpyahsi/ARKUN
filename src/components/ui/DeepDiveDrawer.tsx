"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useDeepDive } from '@/context/DeepDiveContext';

export function DeepDiveDrawer() {
    const { activeFeatureId, closeDeepDive } = useDeepDive();

    return (
        <AnimatePresence>
            {activeFeatureId && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDeepDive}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-2xl bg-teal-900 border-l border-teal-800 z-50 shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6">
                            <button
                                onClick={closeDeepDive}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-teal-800 text-teal-300 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Feature Detail: <span className="text-teal-400">{activeFeatureId}</span>
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-teal-200">
                                        Detailed information about this specific capability will be displayed here.
                                        This component connects the high-level overview with deep technical specifications.
                                    </p>

                                    <div className="p-4 bg-teal-800 rounded-lg border border-teal-700 mt-8">
                                        <h3 className="text-lg font-semibold text-white mb-2">Technical Specs</h3>
                                        <ul className="list-disc list-inside text-teal-300 space-y-2">
                                            <li>Real-time synchronization</li>
                                            <li>Encrypted data transmission</li>
                                            <li>Audit log capability</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
