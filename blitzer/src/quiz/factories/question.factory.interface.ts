import { Prisma } from '@prisma/client';

export interface QuestionFactoryUpdateParams {
  where: Prisma.QuestionWhereUniqueInput;
  data: Prisma.QuestionUpdateInput;
}
