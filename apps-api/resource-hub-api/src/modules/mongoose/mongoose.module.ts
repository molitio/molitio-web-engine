import { Module } from '@nestjs/common';
import { MongooseModule as Mongoose } from '@nestjs/mongoose';
import { defaultConfig } from '../../configuration';

@Module({
    imports: [Mongoose.forRoot(defaultConfig.databaseUrl)],
})
export class MongooseModule {}
