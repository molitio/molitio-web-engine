import { Module } from '@nestjs/common';
import { UserPublicService } from './user-public.service';
import { UserPublicResolverQuery } from './user-public.query';
import { UserPublicResolverMutation } from './user-public.mutation';

@Module({
    providers: [UserPublicResolverQuery, UserPublicResolverMutation, UserPublicService],
})
export class UserPublicModule {}
