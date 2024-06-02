import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function main() {
    try {
        const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
        app.listen(4000);
    } catch (error) {
        console.error(error, 'at main()');
    }
}
main();

process.on('SIGINT', function () {
    console.log('Resource Hub API is shutting down...');
    process.exit();
});
