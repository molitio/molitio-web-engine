import { Injectable, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseConnectionService {
    private readonly logger = new Logger(DatabaseConnectionService.name);
    private isConnected = false;
    private retryInterval: NodeJS.Timeout | null = null;
    private readonly uri = process.env.MONGO_URI || 'mongodb://localhost:27017/resourcehub';

    async connect() {
        try {
            await mongoose.connect(this.uri);
            this.isConnected = true;
            this.logger.log('Connected to MongoDB');
            if (this.retryInterval) {
                clearInterval(this.retryInterval);
                this.retryInterval = null;
            }
        } catch (error) {
            this.isConnected = false;
            this.logger.error('Unable to connect to MongoDB. Retrying in 10 seconds...', error);
            if (!this.retryInterval) {
                this.retryInterval = setInterval(() => this.connect(), 10000);
            }
        }
    }

    getConnectionStatus() {
        return this.isConnected;
    }
}
