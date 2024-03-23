   import {CodeGenConfig} from '@graphql-codegen/cli';


        './dist/ui-core/types.ts': { documents: './src/**/*.graphql', plugins: ['typescript'] },
        './dist/gql_client/': { schema: ./src/root.graphql', preset: 'client' },
    }
