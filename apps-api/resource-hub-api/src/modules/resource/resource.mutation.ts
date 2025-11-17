import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ResourceService } from './resource.service';
import { Resource } from './resource.schema';
import { HttpException, HttpStatus } from '@nestjs/common';
import { logError } from 'src/logger';

@Resolver(() => Resource)
export class ResourceMutation {
    constructor(private readonly resouceService: ResourceService) {}

    @Mutation(() => Resource)
    async createResource(@Args('name') name: string, @Args('description') description?: string): Promise<Resource> {
        try {
            return this.resouceService.create({ name: name, description: description });
        } catch (error) {
            logError(error, 'ResourceMutation');
            throw new HttpException('Failed to create resource', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Mutation(() => Resource)
    async updateResource(
        @Args('_id') id: string,
        @Args('name') name?: string,
        @Args('description', { nullable: true }) description?: string,
    ): Promise<Resource> {
        try {
            const resource = await this.resouceService.findOne(id);
            if (!resource) return;
            if (name !== undefined) resource.name = name;
            if (description !== undefined) resource.description = description;
            return this.resouceService.update(resource);
        } catch (error) {
            logError(error, 'ResourceMutation');
            throw new HttpException('Failed to update resource', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Mutation(() => Resource)
    async deleteResource(@Args('id') id: string): Promise<void> {
        try {
            await this.resouceService.delete(id);
        } catch (error) {
            logError(error, 'ResourceMutation');
            throw new HttpException('Failed to delete resource', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
