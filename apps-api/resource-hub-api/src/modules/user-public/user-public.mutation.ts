import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { UserPublic } from './user-public.schema';
import { UserPublicService } from './user-public.service';
import { CreateUserPublicInput } from './user-public.input';

@Resolver(() => UserPublic)
export class UserPublicMutation {
    private readonly logger = new Logger(UserPublicMutation.name);
    constructor(private readonly userPublicService: UserPublicService) {}

    @Mutation(() => UserPublic)
    async createUserPublic(@Args('input') input: CreateUserPublicInput): Promise<UserPublic> {
        // Input validation
        if (
            !input.usernamePublic ||
            typeof input.usernamePublic !== 'string' ||
            input.usernamePublic.trim().length === 0
        ) {
            throw new Error('usernamePublic is required and must be a non-empty string');
        }

        const createUserDto: CreateUserPublicInput = {
            ...input,
            usernamePublic: input.usernamePublic.trim(),
        };

        try {
            const createdUser = await this.userPublicService.create(createUserDto);
            return createdUser;
        } catch (error) {
            // Log error for observability
            this.logger.error('Error creating UserPublic:', error instanceof Error ? error.stack : String(error));
            // Optionally, map known errors to user-friendly messages
            throw new Error(error?.message || 'Failed to create user');
        }
    }

    @Mutation(() => UserPublic)
    async updateUserPublic(
        @Args('id') id: string,
        @Args('usernamePublic', { nullable: true }) usernamePublic?: string,
        @Args('resourceCollectionId', { nullable: true }) resourceCollectionId?: string,
        @Args('userPersistedConfigId', { nullable: true }) userPersistedConfigId?: string,
    ): Promise<UserPublic> {
        console.log('implement updateUserPublic', id, usernamePublic, resourceCollectionId, userPersistedConfigId);
        return;

        // Implementation to update an existing UserPublic
        // Return the updated UserPublic instance
    }

    @Mutation(() => UserPublic)
    async deleteUserPublic(@Args('id') id: string): Promise<UserPublic> {
        console.log('implement deleteUserPublic', id);
        return;

        // Implementation to delete a UserPublic
        // Return the deleted UserPublic instance (or null/undefined if it doesn't exist)
    }
}
