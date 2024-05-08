import { Module } from '@nestjs/common';
import { UserPublicService } from './UserPublic.service';
import { UserPublicResolverQuery } from './UserPublic.query';
import { UserPublicResolverMutation } from './UserPublic.mutation';

@Module({
    providers: [UserPublicResolverQuery, UserPublicResolverMutation, UserPublicService],
})
export class UserPublicModule {}
