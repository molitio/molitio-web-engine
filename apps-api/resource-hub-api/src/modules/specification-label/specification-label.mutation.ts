import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabel } from './specification-label.schema';
import { LabelValue } from './label-value.schema';

@Resolver((of: any) => SpecificationLabel)
export class SpecificationLabelMutation {
    constructor(private readonly resouceService: SpecificationLabelService) {}

    @Mutation(() => SpecificationLabel)
    async createSpecificationLabel(
        @Args('name') name: string,
        @Args('labelValue') labelValue: LabelValue[],
        @Args('description') description?: string,
    ): Promise<SpecificationLabel> {
        return this.resouceService.create({
            name: name,
            description: description,
            labelValue: labelValue,
        });
    }

    @Mutation(() => SpecificationLabel)
    async updateSpecificationLabel(
        @Args('_id') id: string,
        @Args('name') name?: string,
        @Args('description', { nullable: true }) description?: string,
    ): Promise<SpecificationLabel> {
        return;

        // Implementation to update an existing SpecificationLabel
        // Return the updated SpecificationLabel instance
    }

    @Mutation(() => SpecificationLabel)
    async deleteSpecificationLabel(@Args('id') id: string): Promise<void> {
        return;

        // Implementation to delete a SpecificationLabel
        // Return the deleted SpecificationLabel instance (or null/undefined if it doesn't exist)
    }
}
