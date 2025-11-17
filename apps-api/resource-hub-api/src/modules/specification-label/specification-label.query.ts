import { Args, Query, Resolver } from '@nestjs/graphql';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabel } from './specification-label.schema';

@Resolver(() => SpecificationLabel)
export class SpecificationLabelQuery {
    constructor(private readonly resouceService: SpecificationLabelService) {}

    @Query(() => SpecificationLabel)
    async specificationLabel(@Args('_id') _id: string): Promise<SpecificationLabel | undefined> {
        return this.resouceService.findOne(_id);
    }

    @Query(() => [SpecificationLabel])
    async specificationLabelCollection(): Promise<SpecificationLabel[]> {
        return this.resouceService.findAll();
    }
}
