import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type SpecificationLabelDocument = HydratedDocument<SpecificationLabel>;

export type LabelValue = {
    name: string;
    value: Object;
};

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
    decription?: string;

    /*    @Field()
    @Prop({ default: false, type: MongooseSchema.Types.Mixed })
    labelType: LabelType; */

    /*    @Field()
    @Prop({ default: false, type: MongooseSchema.Types.Mixed })
    labelValue: LabelValue; */
}

export const SpecificationLabelSchema = SchemaFactory.createForClass(SpecificationLabel);
