import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

export class MWEApp {
    private app: NestFastifyApplication | null = null;
    constructor(private port: number) {}

    async start() {
        try {
            this.app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
            await this.app.listen(this.port, '0.0.0.0');
            console.log(`Resource Hub API started on port ${this.port}`);
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
}
