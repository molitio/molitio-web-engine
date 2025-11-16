import { createRouter, RouterProvider } from '@tanstack/react-router';
import { AppContext } from '../context';
import { SanityClient } from '@sanity/client';
import { routeTree } from './generatedRoutes';
import { SupportedLocale } from './types';

export function createAppRouter({ client, locale = 'en' }: MWEClientAppProviderProps) {
    return createRouter({
        routeTree,
        context: { client, locale },
        defaultPreload: 'intent',
        scrollRestoration: true,
    });
}

export type MWEClientAppProviderProps = {
    ctx?: AppContext;
    client: SanityClient; // Passed from consumer
    locale?: SupportedLocale;
} & { children?: React.ReactNode };

export default function MWEClientAppProvider({ client, locale }: MWEClientAppProviderProps) {
    const router = createAppRouter({ client, locale });
    return <RouterProvider router={router} />;
}
