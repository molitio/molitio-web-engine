import { Module } from '@nestjs/common';
import { UserPrivateResolver } from './user-private.resolver';

@Module({
    providers: [UserPrivateResolver],
})
export class UserPrivateModule {}
