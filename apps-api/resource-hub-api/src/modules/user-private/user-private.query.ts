import { Resolver } from '@nestjs/graphql';
import { UserPrivate } from './user-private.schema';
import { UserPrivateService } from './user-private.service';

@Resolver((of: any) => UserPrivate)
export class UserPrivateQuery {
    constructor(private readonly userPrivateService: UserPrivateService) {}
}
