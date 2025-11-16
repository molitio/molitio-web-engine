import { createRouter } from '@tanstack/react-router';
import { SanityClient } from '@sanity/client';
import { routeTree } from './generatedRoutes';
import { SupportedLocale } from './constants';
import MWEClientApp from './MWEClientApp';

export type AppRouter = ReturnType<typeof createMWEAppRouter>;

export function createMWEAppRouter({ client, locale = 'en' }: MWEClientAppProviderProps) {
    return createRouter({
        routeTree,
        context: { client, locale },
        defaultPreload: 'intent',
        scrollRestoration: true,
    });
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createMWEAppRouter>;
    }
}

type MWEClientAppProviderProps = {
    client: SanityClient;
    locale: SupportedLocale;
};

export default function MWEClientAppProvider({ client, locale }: MWEClientAppProviderProps) {
    const router = createMWEAppRouter({ client, locale });

    return <MWEClientApp router={router} />;
}
