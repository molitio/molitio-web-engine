import { Schema as MongooseSchema } from 'mongoose';
import { IsString } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SpecificationLabel } from '../specification-label';

@ObjectType()
@Schema()
export class Resource {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => Number)
    @Prop({ required: true })
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
    @IsString()
    name: string;

    @Field(() => String, { nullable: true })
    @Prop()
    @IsString()
    description?: string;

    @Field(() => [SpecificationLabel])
    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'SpecificationLabel' }] })
    specificationLabels: SpecificationLabel[];
}

export type CreateResourceDto = Omit<Resource, '_id' | 'createdAt' | 'createdBy' | 'specificationLabels'>;

export const ResourceSchema = SchemaFactory.createForClass(Resource);
