import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLabelValueDto, LabelValue } from './label-value.schema';
import { Model } from 'mongoose';

@Injectable()
export class LabelValueService {
    constructor(@InjectModel(LabelValue.name, 'specification-label') private labelValue: Model<LabelValue>) {}

    async create(createLabelValueDto: CreateLabelValueDto): Promise<LabelValue> {
        const createdLabelValue = new this.labelValue(createLabelValueDto);
        return await createdLabelValue.save();
    }

    async delete(_id: string): Promise<LabelValue> {
        return this.labelValue.findByIdAndDelete(_id);
    }
}
