import { Resolver } from '@nestjs/graphql';
import { UserPrivate } from './user-private.schema';
import { UserPrivateService } from './user-private.service';

@Resolver(() => UserPrivate)
export class UserPrivateQuery {
    constructor(private readonly userPrivateService: UserPrivateService) {}
}
