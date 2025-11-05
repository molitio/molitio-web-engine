import { Args, ArgsType, Field, Mutation, Resolver } from '@nestjs/graphql';
import { SpecificationLabelService } from './specification-label.service';
import { SpecificationLabel } from './specification-label.schema';
import { LabelValue } from './label-value.schema';

@ArgsType()
class CreateSpecificationLabelArgs {
    @Field()
    name: string;
    @Field({ nullable: true })
    description?: string;
    /*     @Field(() => [String], {})
    labelValueIdCollection?: string[]; */
}

@Resolver(() => SpecificationLabel)
export class SpecificationLabelMutation {
    constructor(private readonly resouceService: SpecificationLabelService) {}

    @Mutation(() => SpecificationLabel)
    async createSpecificationLabel(@Args() args: CreateSpecificationLabelArgs): Promise<SpecificationLabel> {
        const { name, description } = args;
        //TODO: implement label value collection creation
        const labelValueCollection: LabelValue[] = [];
        return this.resouceService.create({
            name,
            description,
            labelValueCollection,
        });
    }

    @Mutation(() => SpecificationLabel)
    async updateSpecificationLabel(
        @Args('_id') id: string,
        @Args('name') name?: string,
        @Args('description', { nullable: true }) description?: string,
    ): Promise<SpecificationLabel> {
        console.log('implement updateSpecificationLabel', id, name, description);
        return;

        // Implementation to update an existing SpecificationLabel
        // Return the updated SpecificationLabel instance
    }

    @Mutation(() => SpecificationLabel)
    async deleteSpecificationLabel(@Args('id') id: string): Promise<void> {
        console.log('implement deleteSpecificationLabel', id);
        return;

        // Implementation to delete a SpecificationLabel
        // Return the deleted SpecificationLabel instance (or null/undefined if it doesn't exist)
    }
}
