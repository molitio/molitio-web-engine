import { HttpLink } from '@apollo/client/core';
import { registerApolloClient, ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';

// TODO: abstract to shared library that will be used by multiple apps
export function resolveGraphQLApiUrl() {
    return process.env.RESOURCE_HUB_GRAPHQL_URL ?? 'http://localhost:4000/graphql';
}

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    const link = new HttpLink({
        uri: resolveGraphQLApiUrl(),
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link,
    });
});

export default getClient;
