import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.schema';

@Resolver((of: any) => Resource)
export class ResourceMutation {
    constructor(private readonly resouceService: ResourceService) {}

    @Mutation(() => Resource)
    async createResource(@Args('name') name: string, @Args('description') description?: string): Promise<Resource> {
        return this.resouceService.create({ name: name, description: description });
    }

    @Mutation(() => Resource)
    async updateResource(
        @Args('_id') id: string,
        @Args('name') name?: string,
        @Args('description', { nullable: true }) description?: string,
    ): Promise<Resource> {
        return;

        // Implementation to update an existing Resource
        // Return the updated Resource instance
    }

    @Mutation(() => Resource)
    async deleteResource(@Args('id') id: string): Promise<void> {
        this.resouceService.delete(id);
        // Implementation to delete a Resource
        // Return the deleted Resource instance (or null/undefined if it doesn't exist)
    }
}
