import { createFileRoute, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/about')({
    loader: ({ context }) => {
        const { client } = context;
        return client.fetch(`*[_type == "aboutPage"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData()[0];

    const title = client.title || 'No Title Found';

    return <div>{`Hello "/About "! Title: ${title}`}</div>;
}
