import { Injectable } from '@nestjs/common';
import { UserPublic } from './user-public.type.js';
import { Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class UserPublicService {
    constructor() {
        console.log('UserPublicService instantiated');
    }

    public getUserPublicCollection = async (): Promise<UserPublic[]> => {
        return [
            {
                _id: '665717564ede61180ea6fb1b' as unknown as MongooseSchema.Types.ObjectId,
                usernamePublic: 'John Doe',
                createdAt: new Date().toLocaleString(),
                createdBy: 'System',
            },
        ];
    };
}
