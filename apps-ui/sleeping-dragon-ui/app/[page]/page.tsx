export default async function Page({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    console.log('page', page);

    return <div>Hello, on {page}!</div>;
}
