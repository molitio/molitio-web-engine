import { createRouter } from '@tanstack/react-router';
import { SanityClient } from '@sanity/client';
import { useState, useEffect, Suspense } from 'react';
import { routeTree } from '../generatedRoutes';
import { appContextQuery, SupportedLocale } from '../constants';
import ClientRouteProvider from './ClientRouteProvider';
import { AppContext } from '../../context/app-context/types/AppContext';
import { AppContextRootProvider } from '../../context/app-context/components';
import { Loading } from '../../ui-common';
import { ComponentRegistry } from '../../context';

export type AppRouter = ReturnType<typeof createMWEAppRouter>;

export type ClientAppRouterContext = {
    client: SanityClient;
    locale: SupportedLocale;
    componentRegistry: ComponentRegistry;
};

export function createMWEAppRouter({ client, locale = 'en', componentRegistry }: ClientAppRouterContext) {
    return createRouter({
        routeTree,
        context: { client, locale, componentRegistry },
        defaultPreload: 'intent',
        scrollRestoration: true,
    });
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createMWEAppRouter>;
    }
}

type ClientAppProps = {
    client: SanityClient;
    locale: SupportedLocale;
};

export default function ClientApp({ client, locale }: ClientAppProps) {
    const [appContext, setAppContext] = useState<AppContext | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContext = async () => {
            try {
                const appContextData = await client.fetch(appContextQuery);
                console.info('Current App Context: ', appContextData);
                setAppContext(appContextData);
            } catch (e) {
                console.error('Failed to fetch AppContext:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchContext();
    }, [client]);

    //TODO: this should load the components registry dynamically based on the app context
    const router = createMWEAppRouter({ client, locale, componentRegistry: {} });

    if (loading) return <div>Loading App Context...</div>;
    if (!appContext) return <div>Error: Could not load application context.</div>;

    return (
        <Suspense fallback={<Loading />}>
            <AppContextRootProvider ctx={appContext}>
                <ClientRouteProvider router={router} />
            </AppContextRootProvider>
        </Suspense>
    );
}
