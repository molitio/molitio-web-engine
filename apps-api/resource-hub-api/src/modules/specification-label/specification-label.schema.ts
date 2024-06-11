import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { LabelValue } from './label-value.schema';

export type SpecificationLabelDocument = HydratedDocument<SpecificationLabel>;

export type LabelType = 'logistic-route' | 'logistic-location' | 'user';

@ObjectType()
@Schema()
export class SpecificationLabel {
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
    description?: string;

    /*    @Field()
    @Prop({ default: false, type: MongooseSchema.Types.Mixed })
    labelType: LabelType; */

    @Field(() => [LabelValue])
    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'LabelValue' }] })
    labelValueClolection: LabelValue[];
}

export interface CreateSpecificationLabelDto
    extends Omit<SpecificationLabel, '_id' | 'createdAt' | 'createdBy' | 'labelValueClolection'> {
    labelValueIdCollection: string[];
}

export const SpecificationLabelSchema = SchemaFactory.createForClass(SpecificationLabel);
