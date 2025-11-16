import { SanityClient } from '@sanity/client';
import { createAppRouter } from '../MWEClientAppProvider';

export type SupportedLocale = keyof typeof supportedLocales;

export const supportedLocales = {
    hu: { locale: 'hu', languageTitle: 'Hungarian' },
    en: {
        locale: 'en',
        languageTitle: 'English',
    },
    de: { locale: 'de', languageTitle: 'German' },
} as const;

export type MWEClientAppRouterContext = {
    client: SanityClient;
    locale: SupportedLocale;
};

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createAppRouter>;
    }
}
