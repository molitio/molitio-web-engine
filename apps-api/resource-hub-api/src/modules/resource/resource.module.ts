import { Module } from '@nestjs/common';
import { ResourceQuery } from './resource.query';
import { ResourceService } from './resource.service';
import { ResourceMutation } from './resource.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { Resource, ResourceSchema } from './resource.schema';
import {
    LabelValue,
    LabelValueSchema,
    SpecificationLabel,
    SpecificationLabelSchema,
    SpecificationLabelService,
} from '../specification-label';
import { UserPublic, UserPublicSchema, UserPublicService } from '../user-public';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Resource.name, schema: ResourceSchema }], 'resource'),
        MongooseModule.forFeature(
            [{ name: SpecificationLabel.name, schema: SpecificationLabelSchema }],
            'specification-label',
        ),
        MongooseModule.forFeature([{ name: LabelValue.name, schema: LabelValueSchema }], 'specification-label'),
        MongooseModule.forFeature([{ name: UserPublic.name, schema: UserPublicSchema }], 'user-public'),
    ],
    providers: [ResourceQuery, ResourceMutation, ResourceService, UserPublicService, SpecificationLabelService],
})
export class ResourceModule {}
