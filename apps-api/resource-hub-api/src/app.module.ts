import { GraphQLModule } from '@nestjs/graphql';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';
import { MongooseModule, UserPublicModule } from './modules';

@Module({
    imports: [GraphQLModule, MongooseModule, UserPublicModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
