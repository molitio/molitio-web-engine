import { Module } from '@nestjs/common';
import { UserPublicResolver, UserPublicService } from '.';

@Module({
    providers: [UserPublicResolver, UserPublicService],
})
export default class UserPublicModule {}
