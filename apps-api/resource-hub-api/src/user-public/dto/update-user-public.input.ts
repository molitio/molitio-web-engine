import { CreateUserPublicInput } from './create-user-public.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserPublicInput extends PartialType(CreateUserPublicInput) {
    @Field(() => Int)
    id: number;
}
