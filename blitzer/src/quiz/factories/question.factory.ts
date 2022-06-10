import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { QuestionFactoryUpdateParams } from './question.factory.interface';

@Injectable()
export class QuestionFactory {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  createQuestion(question: Prisma.QuestionCreateInput) {
    return this.prismaService.question.create({ data: question });
  }

  createQuestions(questions: Prisma.QuestionCreateManyInput) {
    return this.prismaService.question.createMany({ data: questions });
  }

  findQuestionById(id: number) {
    return this.prismaService.question.findUnique({ where: { id } });
  }

  updateQuestion({ where, data }: QuestionFactoryUpdateParams) {
    return this.prismaService.question.update({ data, where });
  }

  deleteQuiz(where: Prisma.QuestionWhereUniqueInput) {
    return this.prismaService.quiz.delete({ where });
  }
}
