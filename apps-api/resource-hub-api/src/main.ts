import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    app.listen(4000);
}
bootstrap();

process.on('SIGINT', function () {
    console.log('Resource Hub API is shutting down...');
    process.exit();
});
