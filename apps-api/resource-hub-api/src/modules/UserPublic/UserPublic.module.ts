import { Module } from '@nestjs/common';
import { UserPublicService } from './UserPublic.service.js';
import { UserPublicResolverQuery } from './UserPublic.query.js';
import { UserPublicResolverMutation } from './UserPublic.mutation.js';

@Module({
    providers: [UserPublicResolverQuery, UserPublicResolverMutation, UserPublicService],
})
export class UserPublicModule {}
