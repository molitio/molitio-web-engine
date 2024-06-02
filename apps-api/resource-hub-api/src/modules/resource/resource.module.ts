import { Module } from '@nestjs/common';
import { ResourceQuery } from './resource.query';
import { ResourceService } from './resource.service';
import { ResourceMutation } from './resource.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { Resource, ResourceSchema } from './resource.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Resource.name, schema: ResourceSchema }])],
    providers: [ResourceQuery, ResourceMutation, ResourceService],
})
export class ResourceModule {}
