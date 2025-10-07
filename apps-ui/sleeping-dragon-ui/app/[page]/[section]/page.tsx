import React from 'react';

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
    const { section } = await params;
    console.log('page', section);

    return <div>Hello, on {section}!</div>;
}
