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

/* 

Example for type importing: 

overwrite: true
schema:
    - 'https://myschema/graphql'
documents: */
//    - 'src/**/*.graphql'
/* generates:
    src/@types/codegen/graphql.tsx:
        plugins:
            - 'typescript'
            - 'typescript-operations'
            - 'typescript-react-apollo'
    src/@types/codegen/page.tsx:
        config:
            documentMode: external
            importDocumentNodeExternallyFrom: ./graphql
        preset: import-types
        presetConfig:
            typesPath: ./graphql
        plugins:
            - ./build/src/index.js
hooks:
    afterAllFileWrite:
        - prettier --write */
