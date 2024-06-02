import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.schema';

@Resolver((of: any) => Resource)
export class ResourceMutation {
    constructor(private readonly resouceService: ResourceService) {}

    @Mutation(() => Resource)
    async createResource(
        @Args('name') name: string,
        @Args('decription', { nullable: true }) decription?: string,
    ): Promise<Resource> {
        return this.resouceService.create({ name: name, decription: decription });
        // Implementation to create a new Resource
        // Return the newly created Resource instance
    }

    @Mutation(() => Resource)
    async updateResource(
        @Args('_id') id: string,
        @Args('name') name?: string,
        @Args('decription', { nullable: true }) decription?: string,
    ): Promise<Resource> {
        return;

        // Implementation to update an existing Resource
        // Return the updated Resource instance
    }

    @Mutation(() => Resource)
    async deleteResource(@Args('id') id: string): Promise<Resource> {
        return;

        // Implementation to delete a Resource
        // Return the deleted Resource instance (or null/undefined if it doesn't exist)
    }
}
