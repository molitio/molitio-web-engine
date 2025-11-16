import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
    loader: ({ context }) => {
        const { client } = context;
        return client.fetch(`*[_type == "aboutPage"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData();

    const title = client[0].title || 'No Title Found';
    return <div>{`Contact ${title}`}</div>;
}
