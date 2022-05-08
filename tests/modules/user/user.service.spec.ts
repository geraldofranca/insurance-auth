import { CreateUserDto } from './../../../src/modules/user/dtos/create-user.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { AccountService } from './../../../src/modules/account/account.service';
import { PrismaService } from './../../../src/modules/prisma/prisma.service';
import { TestingModule, Test } from '@nestjs/testing';
import { CreateUserService } from '../../../src/modules/user/services/create-user.service';

describe('UserService', () => {
  let createUserService: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AccountService, CreateUserService],
    }).compile();

    createUserService = module.get<CreateUserService>(CreateUserService);
  });

  it('Deve ser definido', () => {
    expect(createUserService).toBeDefined();
  });
});
