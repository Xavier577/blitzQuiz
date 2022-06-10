import { Prisma } from '@prisma/client';
import { IQuestion } from './interfaces/question.interface';

export class QuestionSerializer implements Prisma.QuestionCreateInput {
  question: string;
  quiz: Prisma.QuizCreateNestedOneWithoutQuestionsInput;
  answer?: Prisma.AnswerCreateNestedOneWithoutQuestionInput;
  options?: Prisma.OptionCreateNestedManyWithoutQuestionInput;

  constructor(question: IQuestion) {
    this.question = question.question;
    this.answer = {
      create: {
        option: question.answer.option,
        answer: question.answer.answer,
      },
    };
    this.options = {
      create: question.options,
    };
  }
}
