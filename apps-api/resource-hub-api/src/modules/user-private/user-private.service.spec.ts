import { Test, TestingModule } from '@nestjs/testing';
import { UserPrivateService } from './user-private.service';

describe('UserPrivateService', () => {
    let service: UserPrivateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserPrivateService],
        }).compile();

        service = module.get<UserPrivateService>(UserPrivateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
