import { Injectable } from '@nestjs/common';
import { UserPublic } from './user-public.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserPublicRoles } from './user-public.types';
import { CreateUserPublicInput } from './user-public.input';
import { newTimestamp } from 'src/utils/dateTime';

@Injectable()
export class UserPublicService {
    constructor(@InjectModel(UserPublic.name, 'user-public') private userPublic: Model<UserPublic>) {}

    public isAuthenticated = async (): Promise<boolean> => {
        // TODO: implement real authentication check for MVP release
        return true;
    };

    async create(userPublic: CreateUserPublicInput): Promise<UserPublic> {
        const now = newTimestamp();
        const createdUserPublic = new this.userPublic({
            ...userPublic,
            createdAt: now,
        });
        return await createdUserPublic.save();
    }

    async findOne(_id: string): Promise<UserPublic> {
        return await this.userPublic.findById(_id);
    }

    //TODO: refactor when roles properly implemented
    private mockRole: UserPublicRoles = UserPublicRoles.ADMIN;

    public findAll = async (): Promise<UserPublic[]> => {
        if (!this.isAuthenticated() && this.mockRole === UserPublicRoles.ADMIN) {
            return [];
        }
        return await this.userPublic.find();
    };
}
