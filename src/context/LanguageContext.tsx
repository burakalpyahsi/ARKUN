'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { translations, Locale, TranslationKeys } from '../lib/translations';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    // Load saved locale from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('arkun-locale') as Locale | null;
        if (saved && (saved === 'en' || saved === 'tr')) {
            setLocaleState(saved);
        }
    }, []);

    // Save locale to localStorage when changed
    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('arkun-locale', newLocale);
    }, []);

    // Translation function
    const t = useCallback((key: TranslationKeys): string => {
        const keys = key.split('.');
        let value: unknown = translations[locale];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
                return key;
            }
        }

        return typeof value === 'string' ? value : key;
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
