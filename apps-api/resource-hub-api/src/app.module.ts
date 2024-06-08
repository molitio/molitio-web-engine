import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ResourceModule, UserPublicModule, UserPrivateModule, SpecificationLabelModule } from './modules';
import { defaultConfig } from './configuration';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './gql/schema.graphql',
        }),
        MongooseModule.forRoot(defaultConfig.resourceDatabaseUrl),
        UserPublicModule,
        UserPrivateModule,
        ResourceModule,
        SpecificationLabelModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
