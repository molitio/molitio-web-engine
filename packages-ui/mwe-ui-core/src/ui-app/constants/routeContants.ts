export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const supportedLocales = {
    hu: {
        locale: 'hu',
        languageTitle: 'Hungarian',
    },
    en: {
        locale: 'en',
        languageTitle: 'English',
    },
} as const;

export const supportedLocalesArray: SupportedLocale[] = Object.keys(supportedLocales) as SupportedLocale[];

export type SupportedLocale = keyof typeof supportedLocales;

export function isSupportedLocale(locale: string): locale is SupportedLocale {
    return supportedLocalesArray.includes(locale as SupportedLocale);
}

export function supportedLocaleOrDefault(locale: string): SupportedLocale {
    if (!isSupportedLocale(locale)) {
        return DEFAULT_LOCALE;
    }
    return locale as SupportedLocale;
}
