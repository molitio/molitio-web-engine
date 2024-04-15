import { Module } from '@nestjs/common';
import { UserPublicService } from './user-public.service';
import { UserPublicResolver } from './user-public.resolver';

@Module({
    providers: [UserPublicResolver, UserPublicService],
})
export class UserPublicModule {}
