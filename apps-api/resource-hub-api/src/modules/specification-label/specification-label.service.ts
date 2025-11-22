import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpecificationLabelDto, SpecificationLabel } from './specification-label.schema';
import { LabelValue } from './label-value.schema';
import { newTimestamp } from '../../utils/dateTime';

@Injectable()
export class SpecificationLabelService {
    constructor(
        @InjectModel(SpecificationLabel.name, 'specification-label')
        private SpecificationLabel: Model<SpecificationLabel>,
        @InjectModel(LabelValue.name, 'specification-label') private labelValue: Model<LabelValue>,
    ) {}

    async create(createSpecificationLabelDto: CreateSpecificationLabelDto): Promise<SpecificationLabel> {
        const createdSpecificationLabel = new this.SpecificationLabel(createSpecificationLabelDto);

        if (createSpecificationLabelDto.labelValueCollection) {
            createdSpecificationLabel.labelValueCollection = await this.SpecificationLabel.findOne({
                _id: { $in: [...createSpecificationLabelDto.labelValueCollection] },
            });
        }

        createdSpecificationLabel.createdAt = newTimestamp();
        createdSpecificationLabel.createdBy = 'System';
        return await createdSpecificationLabel.save();
    }

    async findOne(_id: string): Promise<SpecificationLabel | undefined> {
        return this.SpecificationLabel.findById(_id);
    }

    async findAll(): Promise<SpecificationLabel[]> {
        const SpecificationLabels = await this.SpecificationLabel.find();
        return SpecificationLabels;
    }
}
