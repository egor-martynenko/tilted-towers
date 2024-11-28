import { create } from 'zustand';
import translations from '@/shared/i18n/translations.json';

type Language = 'en' | 'ru';

interface LanguageStore {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
    language: 'en',
    setLanguage: (lang) => set({ language: lang }),
    t: (key) => {
        const lang = get().language;
        return (translations as Record<Language, Record<string, string>>)[lang][key] || key;
    }
}));
