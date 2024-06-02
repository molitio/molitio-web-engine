import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserPublic } from './user-public.type';
import { UserPublicService } from './user-public.service';

@Resolver((of: any) => UserPublic)
export class UserPublicResolverMutation {
    constructor(private readonly userPublicService: UserPublicService) {}
    @Mutation(() => UserPublic)
    async createUserPublic(
        @Args('usernamePublic') usernamePublic: string,
        @Args('resourceCollectionId', { nullable: true }) resourceCollectionId?: string,
        @Args('userPersistedConfigId', { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPublic> {
        return;
        // Implementation to create a new UserPublic
        // Return the newly created UserPublic instance
    }

    @Mutation(() => UserPublic)
    async updateUserPublic(
        @Args('id') id: string,
        @Args('usernamePublic', { nullable: true }) usernamePublic?: string,
        @Args('resourceCollectionId', { nullable: true }) resourceCollectionId?: string,
        @Args('userPersistedConfigId', { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPublic> {
        return;

        // Implementation to update an existing UserPublic
        // Return the updated UserPublic instance
    }

    @Mutation(() => UserPublic)
    async deleteUserPublic(@Args('id') id: string): Promise<UserPublic> {
        return;

        // Implementation to delete a UserPublic
        // Return the deleted UserPublic instance (or null/undefined if it doesn't exist)
    }
}
