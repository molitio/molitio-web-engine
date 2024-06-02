import { Resolver } from '@nestjs/graphql';
import { UserPrivate } from './user-private.type';
import { UserPrivateService } from './user-private.service';

@Resolver((of: any) => UserPrivate)
export class UserPrivateQuery {
    constructor(private readonly userPrivateService: UserPrivateService) {}
}
