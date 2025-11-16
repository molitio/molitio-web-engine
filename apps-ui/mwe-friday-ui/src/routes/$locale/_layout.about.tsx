import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_layout/about')({
    loader: ({ context, params }) => {
        const { client } = context;
        const { locale } = params;
        return client.fetch(`*[_type == "aboutPage" && language == "${locale}"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData();

    const title = client[0].title || 'No Title Found';
    return <div>{`About ${title}`}</div>;
}
