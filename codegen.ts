import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    allowPartialOutputs: false,
    ignoreNoDocuments: true,
    schema: 'apps-api/resource-hub-api/gql/schema.graphql',
    generates: {
        'apps-ui/sleeping-dragon-ui/app/_resource-api-client/generatedTypes.ts': {
            plugins: ['typescript'],
        },
        'apps-ui/sleeping-dragon-ui/app/_resource-api-client/generatedOperations.ts': {
            preset: 'import-types',
            presetConfig: {
                typesPath: './generatedTypes',
            },
            plugins: ['typescript-operations', 'typed-document-node'],
            documents: 'apps-ui/sleeping-dragon-ui/app/**/*.graphql',
        },
    },
};

export default config;
