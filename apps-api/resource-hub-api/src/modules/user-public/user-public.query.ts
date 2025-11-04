import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserPublic } from './user-public.schema'; // Assuming UserPublic is defined in 'UserPublic.ts'
import { UserPublicService } from './user-public.service';

@Resolver(() => UserPublic)
export class UserPublicQuery {
    constructor(private readonly userPublicService: UserPublicService) {}

    @Query(() => UserPublic)
    async userPublic(@Args('_id') id: string): Promise<UserPublic> {
        return this.userPublicService.findOne(id);
    }

    @Query(() => [UserPublic])
    async userPublicCollection(): Promise<UserPublic[]> {
        return this.userPublicService.findAll();
    }
}
