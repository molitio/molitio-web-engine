import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: unknown, res: unknown, next: () => void) {
        console.info('Internal Logger: Request received...');
        next();
    }
}
