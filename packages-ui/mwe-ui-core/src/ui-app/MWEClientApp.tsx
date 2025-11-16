import React from 'react';
import { useTranslation } from 'react-i18next';
import { SanityClient } from '@sanity/client';
import { MWEClientRootLayout } from '../layout';
import { AppContext } from '../context';
import { createRouter, RouterProvider } from '@tanstack/react-router';

export function createAppRouter({ client, locale = 'en' }: MWEClientAppProps) {
    return createRouter({
        routeTree,
        context: { client, locale },
        defaultPreload: 'intent',
        scrollRestoration: true,
    });
}
declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createAppRouter>;
    }
}

export const supportedLocales = {
    hu: { locale: 'hu', languageTitle: 'Hungarian' },
    en: {
        locale: 'en',
        languageTitle: 'English',
    },
    de: { locale: 'de', languageTitle: 'German' },
} as const;

export type SupportedLocale = keyof typeof supportedLocales;

export function MWEClientAppProvider({ client, locale }: MWEClientAppProps) {
    const router = createAppRouter({ client, locale });
    return <RouterProvider router={router} />;
}

type MWEClientAppProps = {
    ctx?: AppContext;
    client: SanityClient; // Passed from consumer
    locale?: SupportedLocale;
} & { children?: React.ReactNode };

export default function MWEClientApp({ ctx, client, locale, children }: MWEClientAppProps) {
    const router = createAppRouter({ client, locale });
    if (!ctx) {
        return <>Context Error</>;
    }

    return (
        <MWEClientRootLayout ctx={ctx}>
            <h1 className="text-primary">{'GET TITLE'}</h1>
            {children}
        </MWEClientRootLayout>
    );
}
