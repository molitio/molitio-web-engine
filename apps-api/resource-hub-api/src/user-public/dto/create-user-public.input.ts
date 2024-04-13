import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserPublicInput {
    @Field(() => Int, { description: 'Example field (placeholder)' })
    exampleField: number;
}
