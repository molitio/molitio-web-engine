import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateResourceDto, Resource } from './resource.schema';
import { CreateSpecificationLabelDto, SpecificationLabel } from '../specification-label';
import { UserPublicService } from '../user-public/user-public.service';

@Injectable()
export class ResourceService {
    constructor(
        private readonly userPublicService: UserPublicService,
        @InjectModel(Resource.name, 'resource') private resource: Model<Resource>,
        @InjectModel(SpecificationLabel.name, 'specification-label')
        private specificationLabel: Model<SpecificationLabel>,
    ) {}

    async create(createResourceDto: CreateResourceDto): Promise<Resource> {
        const createdResource = new this.resource(createResourceDto);
        createdResource.createdAt = new Date().getTime().toString();
        createdResource.createdBy = 'System';
        return createdResource.save();
    }

    async findAll(): Promise<Resource[]> {
        return await this.resource.find();
    }

    async findOne(_id: string): Promise<Resource | undefined> {
        return this.resource.findOne({ _id });
    }

    async delete(_id: string): Promise<void> {
        const userAuthenticated = this.userPublicService.isAuthenticated();
        if (!userAuthenticated) {
            return;
        }
        await this.resource.deleteOne({ _id });
    }

    async updateResourceSpecificationLables(_id: string, specificationLableIds: string[]): Promise<Resource> {
        const resource = await this.resource.findOne({ _id });
        specificationLableIds.map(async (id) => {
            const label = await this.specificationLabel.findById(id);
            resource.specificationLabels.push(label);
        });
        resource.save();
        return resource;
    }
}
