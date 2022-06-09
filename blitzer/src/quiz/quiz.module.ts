import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizFactory } from './quiz.factory';
import { DatabaseModule } from '../database/database.module';
import { TokenModule } from '../token/token.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DatabaseModule, TokenModule, UsersModule],
  controllers: [QuizController],
  providers: [QuizService, QuizFactory],
})
export class QuizModule {}
