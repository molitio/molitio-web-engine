import { Resolver } from '@nestjs/graphql';
import { UserPublic } from '.';

// TODO inject service
@Resolver((of) => UserPublic)
export default class UserPublicResolver {
    constructor() {}
}
