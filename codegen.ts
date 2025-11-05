import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        'apps-ui/sleeping-dragon-ui/app/_resource-api-client/generatedTypes.ts': {
            schema: 'apps-api/resource-hub-api/gql/schema.graphql',
            plugins: ['typescript'],
        },
        /*     'apps-ui/sleeping-dragon-ui/app/_resource-api-client/operations.ts': {
            schema: 'apps-api/resource-hub-api/gql/schema.graphql',
            documents: 'apps-ui/sleeping-dragon-ui/app/_resource-api-client/queries.graphql',
            plugins: ['typescript', 'client-integration-nextjs'],
        }, */
    },
};

export default config;
