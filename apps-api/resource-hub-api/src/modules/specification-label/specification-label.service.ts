import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpecificationLabelDto, SpecificationLabel } from './specification-label.schema';

@Injectable()
export class SpecificationLabelService {
    constructor(@InjectModel('SpecificationLabel') private SpecificationLabel: Model<SpecificationLabel>) {}
    async create(createSpecificationLabelDto: CreateSpecificationLabelDto): Promise<SpecificationLabel> {
        const createdSpecificationLabel = new this.SpecificationLabel(createSpecificationLabelDto);
        createdSpecificationLabel.createdAt = new Date().getTime().toString();
        createdSpecificationLabel.createdBy = 'System';
        return createdSpecificationLabel.save();
    }

    async findOne(_id: string): Promise<SpecificationLabel | undefined> {
        return this.SpecificationLabel.findById(_id);
    }

    async findAll(): Promise<SpecificationLabel[]> {
        const SpecificationLabels = await this.SpecificationLabel.find();
        return SpecificationLabels;
    }
}
