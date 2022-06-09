import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { User, Prisma } from '@prisma/client';
import {
  FindAllUsersParams,
  UpdateUserParams,
} from './users.factory.interface';

@Injectable()
export class UsersFactory {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  createUser(user: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: user });
  }

  findAllUsers(params: FindAllUsersParams): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findUserById(userId: string) {
    return this.prismaService.user.findUnique({ where: { userId } });
  }

  findUserByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  updateUser(params: UpdateUserParams): Promise<User> {
    const { where, data } = params;
    return this.prismaService.user.update({ data, where });
  }

  deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.delete({ where });
  }
}
