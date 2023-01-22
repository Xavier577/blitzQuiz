import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { DatabaseModule } from '@database/database.module';
import { QuizRepository } from '@repositories/quiz.repository';
import { UsersModule } from '@api/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [QuizController],
  providers: [QuizService, QuizRepository],
})
export class QuizModule {}
