import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindByEmailUserService {
  constructor(private readonly prisma: PrismaService) {}

  execute(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
