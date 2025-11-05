import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        'apps-ui/sleeping-dragon-ui/app/_resource-api-client/index.ts': {
            schema: 'apps-api/resource-hub-api/gql/schema.graphql',
            documents: 'apps-ui/sleeping-dragon-ui/app/_resource-api-client/*.graphql',
            plugins: ['typescript', 'typescript-operations', 'typescript-apollo-client'],
            config: { withHooks: true },
        },
    },
};

export default config;
