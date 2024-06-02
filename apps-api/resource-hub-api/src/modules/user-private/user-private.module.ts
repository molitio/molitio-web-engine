import { Module } from '@nestjs/common';
import { UserPrivateService } from './user-private.service';
import { UserPrivateQuery } from './user-private.query';
import { UserPrivateMutation } from './user-private.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPrivate, UserPrivateSchema } from './user-private.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserPrivate.name, schema: UserPrivateSchema }])],
    providers: [UserPrivateQuery, UserPrivateMutation, UserPrivateService],
})
export class UserPrivateModule {}
