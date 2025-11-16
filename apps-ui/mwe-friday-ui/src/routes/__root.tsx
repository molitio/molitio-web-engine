import { MWEClientApp, MWEClientRootLayout } from '@molitio/mwe-ui-core';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { MWEClientAppRouterContext } from '../main';
import { Context } from '../context';

/* export const Route = createRootRoute({
    component: RootComponent,
});
 */

export const Route = createRootRouteWithContext<MWEClientAppRouterContext>()({
    /*     loader: ({ context }) => {
        const { client } = context;
        return client.fetch(`*[_type == "landingPage"]{ title }`);
    }, */
    component: RootComponent,
    notFoundComponent: () => <div>Not Found</div>,
});

/* const data = await client.fetch(`*[_type == "landingPage"]{ title }`);
const title = data.length > 0 ? data[0].title : 'No Title Found';

console.log('Title from CMS: ', title); */
//const title = 'No Title Found';

export function RootComponent() {
    const client = Route.useLoaderData();

    console.log('Loader Data in Root Route: ', client);
    /*     const title = client[0]?.title || 'No Title Found'; */
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
                    <Link
                        to="/contact"
                        activeProps={{
                            className: 'font-bold',
                        }}
                    >
                        Contact
                    </Link>
                </span>
                {/*    {<div>{`Root: ${title}`}</div>} */}
                <MWEClientApp />
                <Outlet />
            </MWEClientRootLayout>
        </>
    );
}
