import { PrismaService } from '@database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuizRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(query: Prisma.QuizCreateArgs) {
    return this.prismaService.quiz.create(query);
  }

  public async find(query: Prisma.QuizFindFirstArgs) {
    return this.prismaService.quiz.findFirst(query);
  }

  public async findMany(query: Prisma.QuizFindManyArgs) {
    return this.prismaService.quiz.findMany(query);
  }

  public async update(query: Prisma.QuizUpdateArgs) {
    return this.prismaService.quiz.update(query);
  }

  public async delete(query: Prisma.QuizDeleteArgs) {
    return this.prismaService.quiz.delete(query);
  }
}
