import { AccountService } from './../account/account.service';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CreateUserService, FindByEmailUserService } from './services';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserService,
    PrismaModule,
    AccountService,
    FindByEmailUserService,
  ],
  exports: [CreateUserService, FindByEmailUserService],
})
export class UserModule {}
