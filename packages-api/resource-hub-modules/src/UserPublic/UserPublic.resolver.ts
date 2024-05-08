import { Resolver } from '@nestjs/graphql';
import { UserPublicService } from './UserPublic.service';
import { UserPublic } from './UserPublic.type';

@Resolver((of: any) => UserPublic)
export class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
