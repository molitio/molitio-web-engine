import { Args, Query, Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.schema';

@Resolver((of: any) => Resource)
export class ResourceQuery {
    constructor(private readonly resouceService: ResourceService) {}

    @Query((returns) => Resource)
    async resource(@Args('id') id: string): Promise<Resource | undefined> {
        return;
        // Implementation to fetch user by id
        // Return a Resource instance or null/undefined if not found
    }

    @Query((returns) => [Resource])
    async resourceCollection(): Promise<Resource[]> {
        return [];
        //return this.ResourceService.getResourceCollection();
        // Implementation to fetch all Resource entries
        // Return an array of Resource instances
    }
}
