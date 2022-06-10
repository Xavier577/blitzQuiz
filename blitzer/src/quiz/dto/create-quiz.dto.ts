import { Prisma } from '@prisma/client';
import { IQuestion } from '../interfaces/question.interface';
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateQuizDto {
  quizId?: string;

  @IsString()
  title: string;

  @IsBoolean()
  timed?: boolean;

  @IsNumber()
  timeLimit?: number;

  @IsNumber()
  expire?: number;

  @IsNumber()
  totalNumberOfQuestions: number;

  @IsNumber()
  marksPerQuestion: number;

  creator: Prisma.UserCreateNestedOneWithoutQuizzesInput;

  @IsNotEmpty()
  questions: IQuestion[];

  submission?: Prisma.SubmissionCreateNestedManyWithoutQuizInput;
}
