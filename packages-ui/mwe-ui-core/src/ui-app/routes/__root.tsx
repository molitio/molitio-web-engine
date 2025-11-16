import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { MWEClientAppRouterContext } from '../types';

export const Route = createRootRouteWithContext<MWEClientAppRouterContext>()({
    component: RootComponent,
    notFoundComponent: () => <div>Not Found</div>,
});

export function RootComponent() {
    return (
        <main>
            <Outlet />
        </main>
    );
}
