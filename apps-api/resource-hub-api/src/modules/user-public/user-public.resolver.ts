import { Resolver } from '@nestjs/graphql';
import { UserPublicService } from './user-public.service.js';
import { UserPublic } from './user-public.type.js';

@Resolver((of: any) => UserPublic)
export class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
