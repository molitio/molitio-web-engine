import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './globals.css';
import './i18n';
import { ClientConfig, createClient, SanityClient } from '@sanity/client';
import i18n from './i18n';

export const supportedLocales = {
    en: {
        locale: 'en',
        languageTitle: 'English',
    },
    hu: { locale: 'hu', languageTitle: 'Hungarian' },
} as const;

export type SupportedLocale = keyof typeof supportedLocales;

export type MWEClientAppRouterContext = {
    client: SanityClient;
    locale: SupportedLocale;
};

const config: ClientConfig = {
    projectId: 'm95inqn3',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2025-11-15', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
};
export const client = createClient(config);

const locale = (i18n.language as SupportedLocale) || 'en';

const router = createRouter({
    routeTree,
    context: { client, locale },
    defaultPreload: 'intent',
    scrollRestoration: true,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
