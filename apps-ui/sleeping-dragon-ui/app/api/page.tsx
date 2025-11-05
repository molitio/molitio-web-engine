import { Resource } from '../_resource-api-client/index';

export default async function Page() {
    const query = `
        query {
            resourceCollection {
                _id
                name
                description
            }
        }
    `;

    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const resources: Resource[] = data.data?.resourceCollection || [];

    return (
        <div>
            <h1>Resources</h1>
            <ul>
                {resources.map((resource) => (
                    <li key={resource._id}>
                        <h2>Resource name: {resource.name}</h2>
                        <p>Resource description: {resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
