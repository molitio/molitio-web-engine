import { Module } from '@nestjs/common';
import { ResourceQuery } from './resource.query';
import { ResourceService } from './resource.service';
import { ResourceMutation } from './resource.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { Resource, ResourceSchema } from './resource.schema';
import { SpecificationLabel, SpecificationLabelSchema } from '../specification-label';
import { UserPublicService } from '../user-public';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Resource.name, schema: ResourceSchema }]),
        MongooseModule.forFeature([{ name: SpecificationLabel.name, schema: SpecificationLabelSchema }]),
    ],
    providers: [ResourceQuery, ResourceMutation, ResourceService, UserPublicService],
})
export class ResourceModule {}
