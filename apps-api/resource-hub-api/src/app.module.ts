import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UserPublicModule } from './modules';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { defaultConfig } from './configuration';
import { UserPrivateModule } from './modules/user-private/user-private.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './gql/schema.graphql',
        }),
        MongooseModule.forRoot(defaultConfig.databaseUrl),
        UserPublicModule,
        UserPrivateModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
