import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserPublicInput {
    @Field()
    usernamePublic: string;
}
