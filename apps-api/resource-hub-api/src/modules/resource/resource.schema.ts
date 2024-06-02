import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type ResourceDocument = HydratedDocument<Resource>;

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

    @Field()
    @Prop()
    name: string;

    @Field({ nullable: true })
    @Prop()
    decription?: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
