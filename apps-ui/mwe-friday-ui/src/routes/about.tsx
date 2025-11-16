import { createFileRoute, createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const localeRoute = createRoute({
    path: '/$locale',
    getParentRoute: () => rootRoute,
});

export const Route = createRoute({
    path: '$locale/about',
    getParentRoute: () => localeRoute,
    loader: ({ context }) => {
        const { client } = context;
        return client.fetch(`*[_type == "aboutPage"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData();

    const title = client[0].title || 'No Title Found';
    return <div>{`About ${title}`}</div>;
}
