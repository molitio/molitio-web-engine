import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserPublic {
    @Field(() => Int, { description: 'Example field (placeholder)' })
    exampleField: number;
}
