import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserPublic } from './user-public.schema'; // Assuming UserPublic is defined in 'UserPublic.ts'
import { UserPublicService } from './user-public.service';

@Resolver((of: any) => UserPublic)
export class UserPublicResolverQuery {
    constructor(private readonly userPublicService: UserPublicService) {}

    @Query(() => UserPublic)
    async userPublic(@Args('id') id: string): Promise<UserPublic | undefined> {
        return;
        // Implementation to fetch user by id
        // Return a UserPublic instance or null/undefined if not found
    }

    @Query(() => [UserPublic])
    async userPublicCollection(): Promise<UserPublic[]> {
        return this.userPublicService.getUserPublicCollection();
        // Implementation to fetch all UserPublic entries
        // Return an array of UserPublic instances
    }
}
