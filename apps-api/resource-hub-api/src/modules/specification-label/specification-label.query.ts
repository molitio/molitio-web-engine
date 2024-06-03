import { Args, Query, Resolver } from '@nestjs/graphql';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabel } from './specification-label.schema';

@Resolver((of: any) => SpecificationLabel)
export class SpecificationLabelQuery {
    constructor(private readonly resouceService: SpecificationLabelService) {}

    @Query(() => SpecificationLabel)
    async SpecificationLabel(@Args('_id') _id: string): Promise<SpecificationLabel | undefined> {
        return this.resouceService.findOne(_id);
    }

    @Query(() => [SpecificationLabel])
    async SpecificationLabelCollection(): Promise<SpecificationLabel[]> {
        return this.resouceService.findAll();
    }
}
