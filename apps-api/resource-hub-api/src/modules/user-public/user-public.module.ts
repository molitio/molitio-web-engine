import { Module } from '@nestjs/common';
import { UserPublicService } from './user-public.service';
import { UserPublicResolverQuery } from './user-public.query';
import { UserPublicResolverMutation } from './user-public.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPublic, UserPublicSchema } from './user-public.type';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserPublic.name, schema: UserPublicSchema }])],

    providers: [UserPublicResolverQuery, UserPublicResolverMutation, UserPublicService],
})
export class UserPublicModule {}
