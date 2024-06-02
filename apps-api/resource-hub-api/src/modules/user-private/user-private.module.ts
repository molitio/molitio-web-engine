import { Module } from '@nestjs/common';
import { UserPrivateService } from './user-private.service';
import { UserPrivateQuery } from './user-private.query';
import { UserPrivateMutation } from './user-private.mutation';

@Module({
    providers: [UserPrivateQuery, UserPrivateMutation, UserPrivateService],
})
export class UserPrivateModule {}
