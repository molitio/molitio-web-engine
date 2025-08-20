import { Injectable } from '@nestjs/common';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable()
export class AppService {
    constructor(private readonly dbService: DatabaseConnectionService) {}

    healthCheck(): { status: string; dbConnected: boolean } {
        return {
            status: 'ok',
            dbConnected: this.dbService.getConnectionStatus(),
        };
    }
}
