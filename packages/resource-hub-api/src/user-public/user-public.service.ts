import { Injectable } from '@nestjs/common';
import { CreateUserPublicInput } from './dto/create-user-public.input';
import { UpdateUserPublicInput } from './dto/update-user-public.input';

@Injectable()
export class UserPublicService {
    create(createUserPublicInput: CreateUserPublicInput) {
        return 'This action adds a new userPublic';
    }

    findAll() {
        return `This action returns all userPublic`;
    }

    findOne(id: number) {
        return `This action returns a #${id} userPublic`;
    }

    update(id: number, updateUserPublicInput: UpdateUserPublicInput) {
        return `This action updates a #${id} userPublic`;
    }

    remove(id: number) {
        return `This action removes a #${id} userPublic`;
    }
}
