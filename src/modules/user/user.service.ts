import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { AccountService } from '../account/account.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly accountService: AccountService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const accountId = await this.getAccount(createUserDto);

    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
      RoleUser: {
        create: {
          role: {
            connect: {
              id: parseInt(process.env.ROLE_DEFAULT),
            },
          },
        },
      },
      Account: {
        connect: {
          id: accountId,
        },
      },
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  private async getAccount(createUserDto: CreateUserDto): Promise<number> {
    const domain = createUserDto.email.substring(
      createUserDto.email.indexOf('@') + 1,
    );

    const account = await this.accountService.findByUrlDomain(domain);
    return account?.id;
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
