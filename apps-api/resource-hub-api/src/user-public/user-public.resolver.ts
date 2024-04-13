import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserPublicService } from './user-public.service';
import { UserPublic } from './entities/user-public.entity';
import { CreateUserPublicInput } from './dto/create-user-public.input';
import { UpdateUserPublicInput } from './dto/update-user-public.input';

@Resolver(() => UserPublic)
export class UserPublicResolver {
    constructor(private readonly userPublicService: UserPublicService) {}

    @Mutation(() => UserPublic)
    createUserPublic(@Args('createUserPublicInput') createUserPublicInput: CreateUserPublicInput) {
        return this.userPublicService.create(createUserPublicInput);
    }

    @Query(() => [UserPublic], { name: 'userPublic' })
    findAll() {
        return this.userPublicService.findAll();
    }

    @Query(() => UserPublic, { name: 'userPublic' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.userPublicService.findOne(id);
    }

    @Mutation(() => UserPublic)
    updateUserPublic(@Args('updateUserPublicInput') updateUserPublicInput: UpdateUserPublicInput) {
        return this.userPublicService.update(updateUserPublicInput.id, updateUserPublicInput);
    }

    @Mutation(() => UserPublic)
    removeUserPublic(@Args('id', { type: () => Int }) id: number) {
        return this.userPublicService.remove(id);
    }
}
