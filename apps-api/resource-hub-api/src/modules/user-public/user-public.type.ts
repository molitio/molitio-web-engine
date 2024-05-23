import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class UserPublic {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field()
    @Prop()
    createdAt: string;

    @Field({ nullable: true })
    @Prop()
    updatedAt?: string;

    @Field()
    @Prop()
    createdBy: string;

    @Field({ nullable: true })
    @Prop()
    updatedBy?: string;

    @Field()
    @Prop({ unique: true })
    usernamePublic: string;
    /* 
    @Field(() => String, { nullable: true })
    publicRsourceCollectionId?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    userPersistedConfigId?: MongooseSchema.Types.ObjectId; */
}
