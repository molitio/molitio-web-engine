import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserPublicService {
    constructor() {
        console.log('UserPublicService instantiated');
    }
}
