import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        'apps-ui/dashing-bumblebee-ui/src/resouce-api-client/': {
            schema: 'apps-api/resource-hub-api/gql/schema.graphql',
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            /*        config: { withHooks: true }, */
        },
    },
};

export default config;
