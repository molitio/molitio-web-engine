import { Resolver } from '@nestjs/graphql';
import { UserPublicService } from './UserPublic.service.js';
import { UserPublic } from './UserPublic.type.js';

@Resolver((of: any) => UserPublic)
export class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
