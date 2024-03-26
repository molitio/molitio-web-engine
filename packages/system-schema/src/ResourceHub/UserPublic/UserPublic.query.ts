import { Query, Arg, ID } from 'type-graphql';
import { UserPublic } from './UserPublic.type'; // Assuming UserPublic is defined in 'UserPublic.ts'
import { UserPublicResolver } from './UserPublic';

export class UserPublicResolverQuery extends UserPublicResolver {
    @Query((returns) => UserPublic)
    async userPublic(@Arg('id', () => ID) id: string): Promise<UserPublic | undefined> {
        return;
        // Implementation to fetch user by id
        // Return a UserPublic instance or null/undefined if not found
    }

    @Query((returns) => [UserPublic])
    async userPublicCollection(): Promise<UserPublic[]> {
        return [];
        // Implementation to fetch all UserPublic entries
        // Return an array of UserPublic instances
    }
}
