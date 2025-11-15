import { MWEClientApp, MWEClientRootLayout } from '@molitio/mwe-ui-core';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Context } from '../context';

export const Route = createRootRoute({
    component: RootComponent,
});

{
    /*    
        </RouterProvider> */
}

function RootComponent() {
    return (
        <>
            <MWEClientRootLayout appContext={{ ...Context }}>
                <span>
                    link to about:{' '}
                    <Link
                        to="/about"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        About
                    </Link>
                </span>
                <div>Hello "__root"!</div>
                <MWEClientApp />
                <Outlet />
            </MWEClientRootLayout>
        </>
    );
}
