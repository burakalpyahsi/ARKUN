'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-teal-900 border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">ARKUN</h3>
                        <p className="text-teal-200 max-w-sm">
                            {t('footer.description')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t('footer.product.title')}</h4>
                        <ul className="space-y-2 text-sm text-teal-200">
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.product.features')}</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.product.security')}</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.product.compliance')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t('footer.company.title')}</h4>
                        <ul className="space-y-2 text-sm text-teal-200">
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.company.about')}</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.company.contact')}</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">{t('footer.company.privacy')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 text-center text-teal-400 text-sm">
                    {t('footer.copyright').replace('{year}', currentYear.toString())}
                </div>
            </div>
        </footer>
    );
}
