import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Resource {
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

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String)
    @Prop()
    decription: string;
}
