import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { IsString } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SpecificationLabel } from '../specification-label';

export type ResourceDocument = HydratedDocument<Resource> & {
    _id: MongooseSchema.Types.ObjectId;
};

@ObjectType()
@Schema()
export class Resource {
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
    @IsString()
    name: string;

    @Field({ nullable: true })
    @Prop()
    @IsString()
    description?: string;

    @Field(() => [SpecificationLabel])
    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'SpecificationLabel' }] })
    specificationLabels: SpecificationLabel[];
}

export interface CreateResourceDto extends Omit<Resource, '_id' | 'createdAt' | 'createdBy' | 'specificationLabels'> {}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
