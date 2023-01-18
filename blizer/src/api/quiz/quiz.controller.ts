import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiCookieAuth } from '@nestjs/swagger';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':id')
  @ApiCookieAuth()
  public async getQuiz() {
    return '';
  }

  @Post('')
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
