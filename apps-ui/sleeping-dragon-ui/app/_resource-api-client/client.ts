import { HttpLink } from '@apollo/client/core';
import { registerApolloClient, ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';

/**
 * Configuration for the application. (currently hard coded, should be dynamic based on evironment context)
 */
enum Host {
    container = 'resource-hub-api',
    localhost = 'localhost',
}

/*
 * To switch between local development and containerized environment, change the activeApi value.
 */
const activeApi = Host.localhost;
export const activePort = 4000;

// TODO: abstract to shared library that will be used by multiple apps
export function resolveGraphQLApiUrl() {
    return process.env.RESOURCE_HUB_GRAPHQL_URL ?? `http://${activeApi}:${activePort}/graphql`;
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
