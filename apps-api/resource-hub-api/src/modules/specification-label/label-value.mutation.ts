import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateLabelValueDto, LabelValue } from './label-value.schema';
import { LabelValueService } from './label-value.service';

@Resolver()
export class LabelValueMutation {
    constructor(private readonly labelValueService: LabelValueService) {}
    /*     @Mutation(() => LabelValue)
    async createLabelValue(
        @Args('CreateLabelValueDto')
        createLabelValueDto: CreateLabelValueDto,
    ): Promise<LabelValue> {
        return this.labelValueService.create(createLabelValueDto);
    } */

    @Mutation(() => LabelValue)
    async deleteLabelValue(@Args('_id') _id: string): Promise<LabelValue> {
        return this.labelValueService.delete(_id);
    }
}
