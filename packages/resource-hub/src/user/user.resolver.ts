import { Resolver } from '@nestjs/graphql';
import { UserPublic, UserPublicResolver } from '@molitio/system-schema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => UserPublic)
export class UserResolver extends UserPublicResolver {}
