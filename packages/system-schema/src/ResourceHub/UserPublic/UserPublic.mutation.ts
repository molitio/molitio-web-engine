import { Mutation, Arg, ID } from 'type-graphql';
import { UserPublic } from './UserPublic.type'; // Assuming UserPublic is defined in 'UserPublic.ts'

export class UserPublicResolverMutation {
    @Mutation(() => UserPublic)
    async createUserPublic(
        @Arg('usernamePublic') usernamePublic: string,
        @Arg('resourceCollectionId', () => ID, { nullable: true }) resourceCollectionId?: string,
        @Arg('userPersistedConfigId', () => ID, { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPublic> {
        return;
        // Implementation to create a new UserPublic
        // Return the newly created UserPublic instance
    }

    @Mutation(() => UserPublic)
    async updateUserPublic(
        @Arg('id', () => ID) id: string,
        @Arg('usernamePublic', { nullable: true }) usernamePublic?: string,
        @Arg('resourceCollectionId', () => ID, { nullable: true }) resourceCollectionId?: string,
        @Arg('userPersistedConfigId', () => ID, { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPublic> {
        return;

        // Implementation to update an existing UserPublic
        // Return the updated UserPublic instance
    }

    @Mutation(() => UserPublic)
    async deleteUserPublic(@Arg('id', () => ID) id: string): Promise<UserPublic> {
        return;

        // Implementation to delete a UserPublic
        // Return the deleted UserPublic instance (or null/undefined if it doesn't exist)
    }
}
