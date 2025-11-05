import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type LabelValueDocument = HydratedDocument<LabelValue>;

@ObjectType()
@Schema()
export class LabelValue {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
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
    unitOfMesure: string;

    @Field()
    @Prop()
    value: string;
}

export type CreateLabelValueDto = Omit<LabelValue, '_id' | 'createdAt' | 'createdBy'>;

export const LabelValueSchema = SchemaFactory.createForClass(LabelValue);
