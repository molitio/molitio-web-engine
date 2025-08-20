import { GraphQLModule } from '@nestjs/graphql';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ResourceModule, UserPublicModule, UserPrivateModule, SpecificationLabelModule } from './modules';
import { defaultConfig } from './configuration';
import { Connection } from 'mongoose';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './gql/schema.graphql',
        }),
        MongooseModule.forRoot(defaultConfig.resourceDatabaseUrl, {
            connectionName: 'resource',
        }),
        MongooseModule.forRoot(defaultConfig.userPrivateDatabaseUrl, {
            connectionName: 'user-private',
        }),
        MongooseModule.forRoot(defaultConfig.userPublicDatabaseUrl, {
            connectionName: 'user-public',
        }),
        MongooseModule.forRoot(defaultConfig.specificationLabelDatabaseUrl, {
            connectionName: 'specification-label',
        }),
        UserPublicModule,
        UserPrivateModule,
        ResourceModule,
        SpecificationLabelModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    @InjectConnection('resource') private resourceConnection: Connection;
    @InjectConnection('user-private') private userPrivateConnection: Connection;
    @InjectConnection('user-public') private userPublicConnection: Connection;
    @InjectConnection('specification-label') private specificationLabelConnection: Connection;

    onModuleInit() {
        this.resourceConnection.on('connected', () => {
            console.log('MongoDB Connected: resource');
        });
        this.resourceConnection.on('error', (err) => {
            console.error('MongoDB Error: resource', err);
        });
        this.userPrivateConnection.on('connected', () => {
            console.log('MongoDB Connected: user-private');
        });
        this.userPublicConnection.on('connected', () => {
            console.log('MongoDB Connected: user-public');
        });
        this.specificationLabelConnection.on('connected', () => {
            console.log('MongoDB Connected: specification-label');
        });
    }

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
