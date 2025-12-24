import { en, TranslationTree } from './en';
import { tr } from './tr';

export type Locale = 'en' | 'tr';

export const translations: Record<Locale, TranslationTree> = {
    en,
    tr,
};

// Simple string type for translation keys - use dot notation paths
export type TranslationKeys = string;

export { en, tr };
export type { TranslationTree };
