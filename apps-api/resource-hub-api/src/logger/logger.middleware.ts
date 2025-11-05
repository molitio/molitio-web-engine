import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('mwe-resource-hub-api_LoggerMiddleware');

    use(req: FastifyRequest, res: FastifyReply, next: () => void) {
        const { method, url } = req;
        const start = Date.now();

        this.logger.log(`Request: ${method} ${url} - ${req.ip}`);

        res.raw.on('finish', () => {
            const { statusCode } = res;
            const duration = Date.now() - start;
            this.logger.log(`Response: ${method} ${url} - ${statusCode} - ${duration}ms`);
        });
        next();
    }
}
