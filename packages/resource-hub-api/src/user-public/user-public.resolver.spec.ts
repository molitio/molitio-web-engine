import { Test, TestingModule } from '@nestjs/testing';
import { UserPublicResolver } from './user-public.resolver';
import { UserPublicService } from './user-public.service';

describe('UserPublicResolver', () => {
    let resolver: UserPublicResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserPublicResolver, UserPublicService],
        }).compile();

        resolver = module.get<UserPublicResolver>(UserPublicResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
