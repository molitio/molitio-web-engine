const codeGenConfig = {
    generates: {
        //  '../../.artifacts/gql/types/index.ts': { documents: '**/*.type.graphql', plugins: ['typescript'] },
        '../../.artifacts/system-schema/gql_client/': {
            schema: 'gql/schema.graphql',
            preset: 'client',
        },
    },
};

export default codeGenConfig;
