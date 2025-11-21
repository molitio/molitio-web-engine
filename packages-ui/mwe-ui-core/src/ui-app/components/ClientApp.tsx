import { createRouter, ErrorComponent } from '@tanstack/react-router';
import { SanityClient } from '@sanity/client';
import { useState, useEffect, Suspense } from 'react';
import { routeTree } from '../generatedRoutes';
import { SupportedLocale } from '../constants';
import ClientRouteProvider from './ClientRouteProvider';
import { AppContext } from '../../context/app-context/types/AppContext';
import { AppContextRootProvider } from '../../context/app-context/components';
import { Loading } from '../../ui-common';

export type AppRouter = ReturnType<typeof createMWEAppRouter>;

export function createMWEAppRouter({ client, locale = 'en' }: { client: SanityClient; locale: SupportedLocale }) {
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
                // Fetch appContext with expanded content references (up to 3 levels deep for now)
                const query = `*[_type == "appContext"][0] {
                    ...,
                    rootNode {
                        ...,
                        content->,
                        children[] {
                            ...,
                            content->,
                            children[] {
                                ...,
                                content->,
                                children[] {
                                    ...,
                                    content->
                                }
                            }
                        }
                    }
                }`;
                const data = await client.fetch(query);
                setAppContext(data);
            } catch (e) {
                console.error('Failed to fetch AppContext:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchContext();
    }, [client]);

    const router = createMWEAppRouter({ client, locale });

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
