import { createFileRoute, redirect } from '@tanstack/react-router';
import { SupportedLocale, supportedLocales } from '../main';
import i18n from '../i18n';

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        const supportedLocalesArray: SupportedLocale[] = Object.keys(supportedLocales) as SupportedLocale[];
        const detectedLang = i18n.language?.split('-')[0];
        const defaultLocale =
            detectedLang && supportedLocalesArray.includes(detectedLang as SupportedLocale) ? detectedLang : 'en';
        throw redirect({ to: `/${defaultLocale}`, replace: true });
    },
});
