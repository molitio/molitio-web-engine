import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    loader: ({ context }) => {
        const { client } = context;
        return client.fetch(`*[_type == "landingPage"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData()[0];

    const title = client.title || 'No Title Found';

    return <div>{`Hello "/"! Title: ${title}`}</div>;
}
