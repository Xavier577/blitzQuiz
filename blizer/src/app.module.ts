import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from '@database/database.module';
import { AuthenticationModule } from '@api/authentication/authentication.module';
import { UsersModule } from '@api/users/users.module';
import { QuizModule } from '@api/quiz/quiz.module';
import { SubmissionsModule } from '@api/submissions/submissions.module';
import * as session from 'express-session';
import * as RedisStore from 'connect-redis';
import Redis from '@redis/index';
import { APP_PIPE } from '@nestjs/core';
import { AuthenticationMiddleware } from '@common/middlewares/authentication.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    QuizModule,
    SubmissionsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        errorHttpStatusCode: 400,
        stopAtFirstError: true,
      }),
    },
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    const SessionStore = RedisStore(session);

    consumer
      .apply(
        session({
          secret: this.configService.get('APP_SESSION_SECRET'),
          resave: false,
          saveUninitialized: false,
          store: new SessionStore({
            client: new Redis({
              port: this.configService.get('REDIS_PORT'),
              host: this.configService.get('REDIS_HOST'),
            }),
            logErrors: true,
          }),
        }),
      )
      .forRoutes('*');

    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        {
          path: '/api/authentication/oauth/google',
          method: RequestMethod.GET,
        },
        {
          path: '/api/authentication/google/redirect',
          method: RequestMethod.GET,
        },
      )
      .forRoutes('*');
  }
}
