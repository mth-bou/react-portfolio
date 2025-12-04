import 'server-only'

import { defaultLocale } from "@/constants/locales";
import { Locale } from "@/i18n-config";

type Dictionary = typeof import('./dictionaries/en.json');

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    const supportedLocales = Object.keys(dictionaries) as Locale[];
    const normalizedLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
    const dictionaryLoader = dictionaries[normalizedLocale] || dictionaries[defaultLocale];

    return dictionaryLoader();
};

export type { Dictionary };
