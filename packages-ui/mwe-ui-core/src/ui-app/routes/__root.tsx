import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { SanityClient } from '@sanity/client';
import { SupportedLocale } from '../constants';
import { ClientAppRouterContext } from '../components/ClientApp';

export const Route = createRootRouteWithContext<ClientAppRouterContext>()({
    component: RootComponent,
    notFoundComponent: () => <div>Not Found</div>,
});

export function RootComponent() {
    return (
        <main className="h-screen box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-gradient-to-172 overflow-x-auto overflow-y-auto list-none">
            <Outlet />
        </main>
    );
}
