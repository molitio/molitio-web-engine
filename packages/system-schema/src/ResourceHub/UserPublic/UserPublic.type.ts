import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserPublic {
    @Field((type) => ID)
    id: string;

    @Field()
    createdAt: string;

    @Field({ nullable: true })
    updatedAt?: string;

    @Field()
    createdBy: string;

    @Field({ nullable: true })
    updatedBy?: string;

    @Field()
    usernamePublic: string;

    @Field(() => ID, { nullable: true })
    resourceCollectionId?: string;

    @Field(() => ID, { nullable: true })
    userPersistedConfigId?: string;
}
