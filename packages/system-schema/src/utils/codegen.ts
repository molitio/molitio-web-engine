import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        //  '../../.artifacts/gql/types/index.ts': { documents: '**/*.type.graphql', plugins: ['typescript'] },
        '../../.artifacts/system-schema/gql_client/': {
            schema: 'gql/schema.graphql',
            preset: 'client',
        },
    },
};

export default config;
