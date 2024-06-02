import { Resolver } from '@nestjs/graphql';
import { UserPublicService } from './user-public.service';
import { UserPublic } from './user-public.type';

@Resolver((of: any) => UserPublic)
export class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
