import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { LabelValue } from './label-value.schema';

export type SpecificationLabelDocument = HydratedDocument<SpecificationLabel>;

export type LabelType = 'logistic-route' | 'logistic-location' | 'user';

@ObjectType()
@Schema()
export class SpecificationLabel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => Number)
    @Prop()
    createdAt: number;

    @Field(() => Number, { nullable: true })
    @Prop()
    updatedAt?: number;

    @Field(() => String)
    @Prop()
    createdBy: string;

    @Field(() => String, { nullable: true })
    @Prop()
    updatedBy?: string;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String, { nullable: true })
    @Prop()
    description?: string;

    /*    @Field()
    @Prop({ default: false, type: MongooseSchema.Types.Mixed })
    labelType: LabelType; */

    @Field(() => [LabelValue])
    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'LabelValue' }] })
    labelValueCollection: LabelValue[];
}

export type CreateSpecificationLabelDto = Omit<SpecificationLabel, '_id' | 'createdAt' | 'createdBy'>;

export const SpecificationLabelSchema = SchemaFactory.createForClass(SpecificationLabel);
