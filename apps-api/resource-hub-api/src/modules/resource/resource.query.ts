import { Args, Query, Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.schema';

@Resolver(() => Resource)
export class ResourceQuery {
    constructor(private readonly resouceService: ResourceService) {}

    @Query(() => Resource)
    async resource(@Args('id') id: string): Promise<Resource | undefined> {
        return this.resouceService.findOne(id);
    }

    @Query(() => [Resource])
    async resourceCollection(): Promise<Resource[]> {
        return this.resouceService.findAll();
    }
}
