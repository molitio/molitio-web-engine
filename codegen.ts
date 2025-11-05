import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        'apps-ui/sleeping-dragon-ui/app/_resource-api-client/index.ts': {
            schema: 'apps-api/resource-hub-api/gql/schema.graphql',
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            config: { withHooks: true },
        },
    },
};

export default config;
