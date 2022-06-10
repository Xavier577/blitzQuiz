import { Prisma } from '@prisma/client';

export interface QuizFactoryUpdateParams {
  where: Prisma.QuizWhereUniqueInput;
  data: Prisma.QuizUpdateInput;
}

export interface QuizFactoryFindAllParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.QuizWhereUniqueInput;
  where?: Prisma.QuizWhereInput;
  orderBy?: Prisma.QuizOrderByWithRelationInput;
}
