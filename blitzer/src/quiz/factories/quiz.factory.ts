import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import {
  QuizFactoryFindAllParams,
  QuizFactoryUpdateParams,
} from './quiz.factory.interface';

@Injectable()
export class QuizFactory {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  createQuiz(quiz: Prisma.QuizCreateInput) {
    return this.prismaService.quiz.create({ data: quiz });
  }

  findQuizById(quizId: string) {
    return this.prismaService.quiz.findUnique({ where: { quizId } });
  }

  findQuizzes({
    skip,
    take,
    cursor,
    where,
    orderBy,
  }: QuizFactoryFindAllParams) {
    return this.prismaService.quiz.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  updateQuiz({ where, data }: QuizFactoryUpdateParams) {
    return this.prismaService.quiz.update({ data, where });
  }

  deleteQuiz(where: Prisma.QuizWhereUniqueInput) {
    return this.prismaService.quiz.delete({ where });
  }
}
