import { Test, TestingModule } from '@nestjs/testing';
import { UserPublicService } from './user-public.service';

describe('UserPublicService', () => {
    let service: UserPublicService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserPublicService],
        }).compile();

        service = module.get<UserPublicService>(UserPublicService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
