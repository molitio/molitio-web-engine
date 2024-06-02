import { Test, TestingModule } from '@nestjs/testing';
import { UserPrivateResolver } from './user-private.resolver';

describe('UserPrivateResolver', () => {
  let resolver: UserPrivateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPrivateResolver],
    }).compile();

    resolver = module.get<UserPrivateResolver>(UserPrivateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
