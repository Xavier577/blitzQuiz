import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  UseGuards,
  NotFoundException,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import AsyncHook from '../shared/helpers/async-hook';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { GlobalErrorInterceptor } from '../shared/interceptors/global-error.interceptor';

@UseInterceptors(GlobalErrorInterceptor)
@UseGuards(JwtAuthGuard)
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('create')
  async setQuiz(
    @Request() req,
    @Body(new ValidationPipe({ whitelist: true })) createQuizDto: CreateQuizDto,
  ) {
    const [quizToken, err] = await AsyncHook(
      this.quizService.create(req.user.userId, createQuizDto),
    );
    if (err) throw err;
    return { msg: 'successfully created quiz', quiz_token: quizToken };
  }

  @Get(':quizToken')
  async getQuiz(@Param() quizToken: string) {
    const [quiz, err] = await AsyncHook(this.quizService.fetchQuiz(quizToken));
    if (err) throw err;
    if (!quiz) throw new NotFoundException('quiz not found');
    return quiz;
  }

  @Get('created-quizzes')
  async getQuizzesSetByUser(@Request() req) {
    const [quizzes, err] = await AsyncHook(
      this.quizService.fetchAllQuizzesSet(req.user.userId),
    );
    if (err) throw err;
    return quizzes;
  }

  @Get('generate-token/:quizId')
  async getQuizToken(@Param() quizId: string) {
    const quizToken = await this.quizService.generateQuizToken(quizId);
    return { quiz_token: quizToken };
  }
}
