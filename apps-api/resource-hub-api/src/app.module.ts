import { GraphQLModule } from '@nestjs/graphql';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { MiddlewareConsumer, Module, Logger } from '@nestjs/common';
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
            authSource: 'resource-hub-db',
            connectionName: 'resource',
        }),
        MongooseModule.forRoot(defaultConfig.userPrivateDatabaseUrl, {
            authSource: 'resource-hub-db',
            connectionName: 'user-private',
        }),
        MongooseModule.forRoot(defaultConfig.userPublicDatabaseUrl, {
            authSource: 'resource-hub-db',
            connectionName: 'user-public',
        }),
        MongooseModule.forRoot(defaultConfig.specificationLabelDatabaseUrl, {
            authSource: 'resource-hub-db',
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
    private readonly logger = new Logger('MongoDB');

    @InjectConnection('resource') private resourceConnection: Connection;
    @InjectConnection('user-private') private userPrivateConnection: Connection;
    @InjectConnection('user-public') private userPublicConnection: Connection;
    @InjectConnection('specification-label') private specificationLabelConnection: Connection;

    onModuleInit() {
        this.logger.log('MongoDB connections initialized');
        [
            { name: 'resource', conn: this.resourceConnection },
            { name: 'user-private', conn: this.userPrivateConnection },
            { name: 'user-public', conn: this.userPublicConnection },
            { name: 'specification-label', conn: this.specificationLabelConnection },
        ].forEach(({ name, conn }) => {
            conn.on('connecting', () => {
                this.logger.log(`[${name}] Connecting...`);
            });
            conn.on('connected', () => {
                this.logger.log(`[${name}] Connected`);
            });
            conn.on('disconnected', () => {
                this.logger.warn(`[${name}] Disconnected`);
            });
            conn.on('reconnected', () => {
                this.logger.log(`[${name}] Reconnected`);
            });
            conn.on('close', () => {
                this.logger.warn(`[${name}] Connection closed`);
            });
            conn.on('error', (err) => {
                this.logger.error(`[${name}] Error: ${err?.message}`, err?.stack);
            });
        });
    }

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
