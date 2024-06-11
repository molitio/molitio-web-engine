import { Module } from '@nestjs/common';
import { SpecificationLabelQuery } from './specification-label.query';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabelMutation } from './specification-label.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecificationLabel, SpecificationLabelSchema } from './specification-label.schema';
import { LabelValueMutation } from './label-value.mutation';
import { LabelValueService } from './label-value.service';
import { LabelValue, LabelValueSchema } from './label-value.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: SpecificationLabel.name, schema: SpecificationLabelSchema }],
            'specification-label',
        ),
        MongooseModule.forFeature([{ name: LabelValue.name, schema: LabelValueSchema }], 'specification-label'),
    ],
    providers: [
        SpecificationLabelQuery,
        SpecificationLabelMutation,
        SpecificationLabelService,
        LabelValueMutation,
        LabelValueService,
    ],
})
export class SpecificationLabelModule {}
