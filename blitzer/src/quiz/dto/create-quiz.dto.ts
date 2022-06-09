import { Prisma } from '@prisma/client';

export class CreateQuizDto {
  title: string;
  timed?: boolean;
  timeLimit?: number;
  expire?: number;
  marksPerQuestion?: number;
  maximumNumberOfQuestions: number;
  creator: Prisma.UserCreateNestedOneWithoutQuizzesInput;
  questions: Prisma.QuestionCreateInput;
  submission?: Prisma.SubmissionCreateNestedManyWithoutQuizInput;
}
