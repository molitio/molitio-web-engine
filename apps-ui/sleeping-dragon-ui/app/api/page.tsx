export const dynamic = 'force-dynamic';

import { getClient } from '../_resource-api-client';
import { GetResourceCollectionDocument } from '../_resource-api-client';
import type { GetResourceCollectionQuery, GetResourceCollectionQueryVariables } from '../_resource-api-client/';

export default async function Page() {
    const client = getClient();
    const { data } = await client.query<GetResourceCollectionQuery, GetResourceCollectionQueryVariables>({
        query: GetResourceCollectionDocument,
    });

    const resources = data?.resourceCollection ?? [];

    return (
        <div>
            <h1>Resources</h1>
            <ul>
                {resources.map((resource) => (
                    <li key={resource._id}>
                        <h2>Resource name: {resource.name}</h2>
                        <p>Resource description: {resource.description ?? '—'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
