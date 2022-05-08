import { AccountService } from './../../../src/modules/account/account.service';
import { PrismaService } from './../../../src/modules/prisma/prisma.service';
import { TestingModule, Test } from '@nestjs/testing';
import { UserService } from '../../../src/modules/user/services/user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AccountService, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('Deve ser definido', () => {
    expect(service).toBeDefined();
  });
});
