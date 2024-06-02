import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resource } from './resource.schema';

@Injectable()
export class ResourceService {
    constructor(@InjectModel('Resource') private resource: Model<Resource>) {}
    async create(createResourceDto: Omit<Resource, '_id' | 'createdAt' | 'createdBy'>): Promise<Resource> {
        const createdResource = new this.resource(createResourceDto);
        createdResource.createdAt = new Date().getTime().toString();
        createdResource.createdBy = 'System';
        return createdResource.save();
    }
}
