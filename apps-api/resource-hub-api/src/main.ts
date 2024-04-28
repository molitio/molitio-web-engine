import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));
    await app.listen(4000);
}
bootstrap();

process.on('SIGINT', function () {
    console.log('Resource Hub API is shutting down...');
});
