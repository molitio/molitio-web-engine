import { Resolver } from 'type-graphql';
import { UserPublic } from './UserPublic.type';

@Resolver(UserPublic)
export class UserPublicResolver {
    constructor() {}
}
