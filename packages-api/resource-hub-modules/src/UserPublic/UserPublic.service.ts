import { Injectable } from '@nestjs/common';
import { UserPublic } from './UserPublic.type';

@Injectable()
export class UserPublicService {
    constructor() {
        console.log('UserPublicService instantiated');
    }

    public getUserPublicCollection = async (): Promise<UserPublic[]> => {
        return [
            {
                id: '1',
                usernamePublic: 'John Doe',
                createdAt: new Date().toLocaleString(),
                createdBy: 'System',
            },
        ];
    };
}
