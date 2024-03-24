import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        '../.artifacts/ui-core/types.ts': { documents: './src/**/*.graphql', plugins: ['typescript'] },
        '../.artifacts/gql_client/': {
            schema: './src/root.graphql',
            preset: 'client',
        },
    },
};

export default config;
