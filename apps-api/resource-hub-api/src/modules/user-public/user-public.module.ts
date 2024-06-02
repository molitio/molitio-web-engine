import { Module } from '@nestjs/common';
import { UserPublicService } from './user-public.service.js';
import { UserPublicResolverQuery } from './user-public.query.js';
import { UserPublicResolverMutation } from './user-public.mutation.js';

@Module({
    providers: [UserPublicResolverQuery, UserPublicResolverMutation, UserPublicService],
})
export class UserPublicModule {}
