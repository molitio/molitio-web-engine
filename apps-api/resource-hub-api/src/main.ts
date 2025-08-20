import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DatabaseConnectionService } from './database-connection.service';

export class MWEApp {
    private app: NestFastifyApplication | null = null;
    private dbService: DatabaseConnectionService;
    constructor(private port: number) {
        this.dbService = new DatabaseConnectionService();
    }

    async start() {
        try {
            this.app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
            await this.app.listen(this.port);
            console.log(`Resource Hub API started on port ${this.port}`);
            // Start DB connection attempts in background
            this.dbService.connect();
        } catch (error) {
            console.error(error, 'at MWEApp.start()');
        }
    }

    async shutdown() {
        if (this.app) {
            await this.app.close();
        }
        console.log('Resource Hub API is shutting down...');
        process.exit();
    }

    getDbStatus() {
        return this.dbService.getConnectionStatus();
    }
}

const appInstance = new MWEApp(4000);
appInstance.start();

process.on('SIGINT', () => {
    appInstance.shutdown();
});
