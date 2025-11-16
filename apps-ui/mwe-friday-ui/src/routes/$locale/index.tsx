import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
    loader: ({ context, params }) => {
        const { client } = context;
        const { locale } = params;
        return client.fetch(`*[_type == "landingPage" && language == "${locale}"]{ title, language }`);
    },
    component: RouteComponent,
});

function RouteComponent() {
    const ctx = Route.useLoaderData()[0];

    const title = ctx.title || 'No Title Found';

    return <div>{`Hello "/${ctx.language}"! Title: ${title}`}</div>;
}
