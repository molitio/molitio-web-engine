import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        '../../.artifacts/ui-core/types.ts': { schema: '**/types/**/*.graphql', plugins: ['typescript'] },
        '../../.artifacts/gql_client/': {
            schema: './gql/root.graphql',
            preset: 'client',
        },
    },
};

export default config;
