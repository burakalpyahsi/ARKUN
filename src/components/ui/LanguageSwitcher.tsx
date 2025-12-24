'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/translations';

export function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'tr' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-800/60 border border-teal-700 hover:border-teal-500 hover:bg-teal-700 transition-all text-sm font-medium"
            aria-label={`Switch language to ${locale === 'en' ? 'Turkish' : 'English'}`}
        >
            <span className={`${locale === 'en' ? 'text-teal-400' : 'text-teal-300/60'} transition-colors`}>
                EN
            </span>
            <span className="text-teal-600">/</span>
            <span className={`${locale === 'tr' ? 'text-teal-400' : 'text-teal-300/60'} transition-colors`}>
                TR
            </span>
        </button>
    );
}
