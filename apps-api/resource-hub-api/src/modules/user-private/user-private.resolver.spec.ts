import { Test, TestingModule } from '@nestjs/testing';
import { UserPrivateQuery } from './user-private.query';

describe('UserPrivateResolver', () => {
    let resolver: UserPrivateQuery;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserPrivateQuery],
        }).compile();

        resolver = module.get<UserPrivateQuery>(UserPrivateQuery);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
