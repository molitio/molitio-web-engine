/* import { GetResourceCollectionQuery } from '../_resource-api-client/operations';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const GET_RESOURCE_COLLECTION = gql`
    query GetResourceCollection {
        resourceCollection {
            _id
            name
            description
        }
    }
`; */

export default async function Page() {
    /*     const client = new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql',
            fetch,
        }),
        cache: new InMemoryCache(),
    });

    const { data } = await client.query<GetResourceCollectionQuery>({
        query: GET_RESOURCE_COLLECTION,
    });

    const resources = data.resourceCollection;
 */
    return (
        <div>
            <h1>Resources</h1>
            <ul>
                {/*               {resources.map((resource) => (
                    <li key={resource._id}>
                        <h2>Resource name: {resource.name}</h2>
                        <p>Resource description: {resource.description}</p>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
