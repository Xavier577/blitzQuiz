import { SessionUser } from '@common/decorators/session-user.decorator';
import { SerializedSessionUser } from '@common/interfaces';
import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { QuizService } from './quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':id')
  @ApiCookieAuth()
  public async getCreatedQuiz(
    @Param('id') id: string,
    @SessionUser() { id: userId }: SerializedSessionUser,
  ) {
    const quiz = await this.quizService.getCreatedQuiz(id, userId);

    return { statusCode: 200, message: 'success', quiz };
  }

  @Get('/all')
  @ApiCookieAuth()
  public async getAllCreatedQuiz(@SessionUser() { id }: SerializedSessionUser) {
    const quizzes = await this.quizService.getAllCreatedQuizzes(id);

    return { statusCode: 200, message: 'success', quizzes };
  }

  @Post('create')
  @ApiCookieAuth()
  public async createQuiz() {
    return '';
  }

  @Patch('')
  @ApiCookieAuth()
  public async editQuiz() {
    return '';
  }

  @Delete('')
  @ApiCookieAuth()
  public async deleteQuiz() {
    return '';
  }
}
