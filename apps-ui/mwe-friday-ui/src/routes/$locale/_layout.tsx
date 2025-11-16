import { MWEClientApp } from '@molitio/mwe-ui-core';
import { Link, Outlet, createFileRoute, useMatches } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_layout')({
    loader: ({ context, params }) => {
        const { client } = context;
        const { locale } = params;
        return client.fetch(`*[_type == "landingPage" && language == "${locale}"]{ title }`);
    },
    component: LocaleLayout,
});

function LocaleLayout() {
    const { locale } = Route.useParams();
    console.log('Current locale:', locale);
    const data = Route.useLoaderData();
    const title = data?.[0]?.title || 'No Title Found';
    // need to get the routes on this level
    // Access active routes
    const matches = useMatches();
    console.log('Active routes:', matches); // Logs the matched route objects (e.g., current route, params, etc.)
    // Example: matches[0] is the root, matches[1] is /$locale, etc.

    return (
        <section>
            <span>
                <Link to="/$locale" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    Home
                </Link>
                <Link to="/$locale/about" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    About
                </Link>
                <Link to="/$locale/contact" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    Contact
                </Link>
            </span>
            {<div>{`Root (${locale}): ${title}`}</div>}
            <h1>Client app</h1>
            <MWEClientApp ctx={{ appId: 'example-app', appName: 'Example App' }}>
                <Outlet />
            </MWEClientApp>
        </section>
    );
}
