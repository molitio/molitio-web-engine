import { Resolver } from '@nestjs/graphql';
import { UserPublic, UserPublicService } from '.';

@Resolver((of: any) => UserPublic)
export default class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
