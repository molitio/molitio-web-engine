import { Injectable } from '@nestjs/common';
import { CreateUserPublicDto, UserPublic } from './user-public.schema';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserPublicRoles } from './user-public.types';

@Injectable()
export class UserPublicService {
    constructor(@InjectModel(UserPublic.name, 'user-public') private userPublic: Model<UserPublic>) {}

    public isAuthenticated = async (): Promise<boolean> => {
        return true;
    };

    async create(userPublic: CreateUserPublicDto): Promise<UserPublic> {
        const createdUserPublic = new this.userPublic(userPublic);
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
