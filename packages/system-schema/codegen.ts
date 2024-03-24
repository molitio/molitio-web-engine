import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        '../../.artifacts/gql/types/index.ts': { documents: '**/*.type.graphql', plugins: ['typescript'] },
        '../../.artifacts/gql/gql_client/': {
            schema: './gql/root.graphql',
            preset: 'client',
        },
    },
};

export default config;
