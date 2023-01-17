import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserRepository } from '@repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(data: Prisma.UserCreateInput) {
    return this.userRepository.create({ data });
  }

  public async getUserByEmail(email: string) {
    return this.userRepository.find({ where: { email } });
  }

  public async getUserById(id: string) {
    return this.userRepository.findById(id);
  }
}
