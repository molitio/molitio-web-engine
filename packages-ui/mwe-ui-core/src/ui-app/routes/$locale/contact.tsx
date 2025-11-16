import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/contact')({
    loader: ({ context, params }) => {
        const { client } = context;
        const { locale } = params;
        return client.fetch(`*[_type == "contactPage" && language == "${locale}"]{ title }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const client = Route.useLoaderData();

    console.log('Contact page data:', client);
    const title = client[0]?.title || 'No Title Found';
    return <div>{`Contact ${title}`}</div>;
}
