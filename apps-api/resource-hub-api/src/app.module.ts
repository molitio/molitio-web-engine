import { GraphQLModule } from '@nestjs/graphql';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';
import { UserPublicModule } from './modules';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './application-configuration.js';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './gql/schema.graphql',
        }),
        MongooseModule.forRoot(config.databaseUrl),
        UserPublicModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
