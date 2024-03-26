import { buildSchema } from 'type-graphql';
import { UserPublicResolver } from '../ResourceHub';

export default async function createResourceHubSchema() {
    try {
        const schema = await buildSchema({
            resolvers: [UserPublicResolver],
            emitSchemaFile: {
                path: __dirname + '../gql/schema.graphql',
            },
        });

        return { schema };
    } catch (error) {
        console.error('Failed to build schema:', error);
        throw error;
    }
}
