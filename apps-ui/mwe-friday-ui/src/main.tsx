import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './globals.css';
import { ClientConfig, createClient, SanityClient } from '@sanity/client';
import { i18n, MWEClientApp } from '@molitio/mwe-ui-core';

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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MWEClientApp client={client} initialLocale={locale} />
    </StrictMode>,
);
