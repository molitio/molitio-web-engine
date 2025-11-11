import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLanding from './en/landing.json';
import huLanding from './hu/landing.json';

/* type LandingNamespace = 'landing';
type LandingKeys = keyof typeof enLanding;

export type TranslationKey = `${LandingNamespace}:${LandingKeys}`; */

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                landing: enLanding,
            },
            hu: {
                landing: huLanding,
            },
        },
        fallbackLng: 'en',
        lng: 'en',
        defaultNS: 'landing',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
