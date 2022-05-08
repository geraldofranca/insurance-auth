import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { prisma } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  findByUrlDomain(domain: string) {
    return this.prisma.account.findFirst({
      where: {
        url_domain: domain,
      },
    });
  }
}
