import { Resolver } from '@nestjs/graphql';
import { UserPublic, UserPublicService } from '.';

// TODO inject service
@Resolver((of) => UserPublic)
export default class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}
}
