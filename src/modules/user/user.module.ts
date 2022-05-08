import { AccountService } from './../account/account.service';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaModule, AccountService],
  exports: [UserService],
})
export class UserModule {}
