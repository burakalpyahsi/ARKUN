"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Download, QrCode } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call and PDF generation
        setTimeout(() => {
            setStatus('success');

            // Simulate PDF Download after successful submission
            const link = document.createElement('a');
            link.href = '#'; // In a real app, this would be the file path
            link.setAttribute('download', 'ARKUN_Technical_Specs.pdf');
            document.body.appendChild(link);
            // link.click(); // Commented out to prevent actual unexpected download behavior in demo
            document.body.removeChild(link);

            alert("ARKUN_Technical_Specs.pdf download started.");

        }, 1500);
    };

    return (
        <Section id="contact" className="bg-teal-800/30 border-t border-teal-700 py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Info & QR */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h2>
                        <p className="text-teal-200 mb-8 text-lg leading-relaxed">
                            {t('contact.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 mb-8">
                            <div className="bg-white p-4 rounded-xl w-fit shadow-2xl shrink-0">
                                <div className="w-32 h-32 bg-teal-50 flex items-center justify-center rounded-lg border-2 border-teal-900 border-dashed">
                                    <QrCode className="w-10 h-10 text-teal-500" />
                                </div>
                            </div>

                            <div className="space-y-4 justify-center flex flex-col">
                                <div className="flex items-center gap-3 text-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>{t('contact.qrItems.docs')}</span>
                                </div>
                                <div className="flex items-center gap-3 text-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>{t('contact.qrItems.ncr')}</span>
                                </div>
                                <div className="flex items-center gap-3 text-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span>{t('contact.qrItems.roi')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="bg-teal-900 border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-teal-900 flex flex-col items-center justify-center z-20 text-center p-8"
                            >
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                                    <Download className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('contact.success.title')}</h3>
                                <p className="text-teal-200 mb-6">{t('contact.success.message')}</p>
                                <Button variant="outline" onClick={() => setStatus('idle')}>{t('contact.success.newForm')}</Button>
                            </motion.div>
                        ) : null}

                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-white">{t('contact.form.title')}</h3>
                            <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">{t('contact.form.mode')}</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-teal-300 uppercase tracking-wider">{t('contact.form.company')}</label>
                                <input type="text" className="w-full bg-teal-800 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder={t('contact.form.companyPlaceholder')} required />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-teal-300 uppercase tracking-wider">{t('contact.form.name')}</label>
                                    <input type="text" className="w-full bg-teal-800 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-teal-300 uppercase tracking-wider">{t('contact.form.email')}</label>
                                    <input type="email" className="w-full bg-teal-800 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-teal-300 uppercase tracking-wider">{t('contact.form.module')}</label>
                                <select className="w-full bg-teal-800 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none" defaultValue="" required>
                                    <option value="" disabled>{t('contact.form.modulePlaceholder')}</option>
                                    <option value="all">{t('contact.form.moduleOptions.all')}</option>
                                    <option value="revision">{t('contact.form.moduleOptions.revision')}</option>
                                    <option value="interlock">{t('contact.form.moduleOptions.interlock')}</option>
                                    <option value="traceability">{t('contact.form.moduleOptions.traceability')}</option>
                                    <option value="bidding">{t('contact.form.moduleOptions.bidding')}</option>
                                </select>
                            </div>

                            <Button type="submit" className="w-full h-12 mt-4 bg-teal-400 text-teal-900 hover:bg-teal-300 font-bold" disabled={status === 'loading'}>
                                {status === 'loading' ? t('contact.form.loading') : t('contact.form.submit')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
