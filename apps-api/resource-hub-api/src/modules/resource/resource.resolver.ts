import { Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service.js';
import { Resource } from './resource.type.js';

@Resolver((of: any) => Resource)
export class ResourceResolver {
    constructor(private readonly resouceService: ResourceService) {}
}
