import { MWEClientApp, MWEClientRootLayout } from '@molitio/mwe-ui-core';
import { Link, Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router';
import { client, MWEClientAppRouterContext } from '../main';
import { Context } from '../context';

/* export const Route = createRootRoute({
    component: RootComponent,
});
 */

export const Route = createRootRouteWithContext<MWEClientAppRouterContext>()({
    component: RootComponent,
    notFoundComponent: () => <div>Not Found</div>,
});

/* const data = await client.fetch(`*[_type == "landingPage"]{ title }`);
const title = data.length > 0 ? data[0].title : 'No Title Found';

console.log('Title from CMS: ', title); */
//const title = 'No Title Found';

export function RootComponent() {
    return (
        <>
            <MWEClientRootLayout appContext={{ ...Context }}>
                <span>
                    <Link
                        to="/"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        About
                    </Link>
                </span>
                {/* <div>{`${title}`}</div> */}
                <MWEClientApp />
                <Outlet />
            </MWEClientRootLayout>
        </>
    );
}
