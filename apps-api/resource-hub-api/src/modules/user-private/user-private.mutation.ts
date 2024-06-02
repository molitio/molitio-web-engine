import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserPrivate } from './user-private.type';
import { UserPrivateService } from './user-private.service';

@Resolver((of: any) => UserPrivate)
export class UserPrivateMutation {
    constructor(private readonly userPrivateService: UserPrivateService) {}

    @Mutation(() => UserPrivate)
    async createUserPrivate(
        @Args('usernamePublic') usernamePublic: string,
        @Args('resourceCollectionId', { nullable: true }) resourceCollectionId?: string,
        @Args('userPersistedConfigId', { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPrivate> {
        return;
        // Implementation to create a new UserPrivate
        // Return the newly created UserPrivate instance
    }

    @Mutation(() => UserPrivate)
    async updateUserPrivate(
        @Args('id') id: string,
        @Args('usernamePublic', { nullable: true }) usernamePublic?: string,
        @Args('resourceCollectionId', { nullable: true }) resourceCollectionId?: string,
        @Args('userPersistedConfigId', { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPrivate> {
        return;

        // Implementation to update an existing UserPrivate
        // Return the updated UserPrivate instance
    }

    @Mutation(() => UserPrivate)
    async deleteUserPrivate(@Args('id') id: string): Promise<UserPrivate> {
        return;

        // Implementation to delete a UserPrivate
        // Return the deleted UserPrivate instance (or null/undefined if it doesn't exist)
    }
}
