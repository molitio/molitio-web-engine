import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
    imports: [
        GraphQL.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './gql/schema.graphql',
        }),
    ],
})
export class GraphQLModule {}
