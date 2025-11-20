import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ClientConfig, createClient } from '@sanity/client';
import { i18n, MWEClientAppProvider, SupportedLocale, ComponentRegistry } from '@molitio/mwe-ui-core';
import './globals.css';

const config: ClientConfig = {
    projectId: 'wzyge8ne',
    dataset: 'development',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2025-11-15', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
};
export const client = createClient(config);

console.log('client:', client);

const locale = (i18n.language as SupportedLocale) || 'en';

const componentRegistry: ComponentRegistry = {
    // Register your page components here
    // 'landingPage': LandingPage,
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MWEClientAppProvider client={client} locale={locale} componentRegistry={componentRegistry} />
    </StrictMode>,
);
