import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { HashModule } from './hash/hash.module';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { TokenModule } from './token/token.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    HashModule,
    AuthModule,
    QuizModule,
    TokenModule,
    SubmissionsModule,
  ],
})
export class AppModule {}
