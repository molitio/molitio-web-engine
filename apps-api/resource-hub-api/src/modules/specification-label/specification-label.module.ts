import { Module } from '@nestjs/common';
import { SpecificationLabelQuery } from './specification-label.query';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabelMutation } from './specification-label.mutation';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecificationLabel, SpecificationLabelSchema } from './specification-label.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: SpecificationLabel.name, schema: SpecificationLabelSchema }])],
    providers: [SpecificationLabelQuery, SpecificationLabelMutation, SpecificationLabelService],
})
export class SpecificationLabelModule {}
