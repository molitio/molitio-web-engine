import { Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.type';

@Resolver((of: any) => Resource)
export class ResourceResolver {
    constructor(private readonly resouceService: ResourceService) {}
}
