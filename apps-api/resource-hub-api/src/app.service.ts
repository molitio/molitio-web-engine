import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constructor() {}

    healthCheck(): { status: string } {
        return {
            status: 'ok',
        };
    }
}
