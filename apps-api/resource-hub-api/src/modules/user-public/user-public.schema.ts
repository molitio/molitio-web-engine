import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserPublicDocument = HydratedDocument<UserPublic>;

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

    @Field({ nullable: true })
    @Prop()
    createdBy?: string;

    @Field({ nullable: true })
    @Prop()
    updatedBy?: string;

    @Field()
    @Prop({ unique: true })
    usernamePublic: string;

    /*  @Prop({ type: String, enum: UserPublicRoles, default: UserPublicRoles.GUEST })
    role: UserPublicRoles; */
    /* 
    @Field(() => String, { nullable: true })
    publicRsourceCollectionId?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    userPersistedConfigId?: MongooseSchema.Types.ObjectId; */
}

export const UserPublicSchema = SchemaFactory.createForClass(UserPublic);
