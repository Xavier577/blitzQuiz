import { PrismaService } from '@database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(query: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(query);
  }

  public async find(query: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(query);
  }

  public async findById(id: string) {
    return this.prismaService.user.findFirst({
      where: { id },
      include: { profile: true },
    });
  }

  public async update(query: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(query);
  }
}
