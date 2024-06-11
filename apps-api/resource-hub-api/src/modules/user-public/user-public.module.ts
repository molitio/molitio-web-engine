import { Module } from '@nestjs/common';
import { UserPublicService } from './user-public.service';
import { UserPublicQuery } from './user-public.query';
import { UserPublicMutation } from './user-public.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPublic, UserPublicSchema } from './user-public.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserPublic.name, schema: UserPublicSchema }], 'user-public')],
    providers: [UserPublicQuery, UserPublicMutation, UserPublicService],
})
export class UserPublicModule {}
