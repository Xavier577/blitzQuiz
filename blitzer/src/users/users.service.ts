import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { HashService } from '../hash/hash.service';
import AsyncHook from '../shared/helpers/async-hook';
import { UsersFactory } from './users.factory';

@Injectable()
export class UsersService {
  constructor(
    private readonly userFactory: UsersFactory,
    private readonly hashService: HashService,
  ) {}

  async createUser(
    createUserData: Prisma.UserCreateInput,
  ): Promise<[User, PrismaClientKnownRequestError]> {
    createUserData.password = await this.hashService.hash(
      createUserData.password,
    );

    const [user, error] = await AsyncHook(
      this.userFactory.createUser(createUserData),
    );
    return [user, error as PrismaClientKnownRequestError];
  }
}
