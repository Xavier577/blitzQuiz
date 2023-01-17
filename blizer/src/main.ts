import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerInit from './swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger(bootstrap.name);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(express.json({ limit: '50mb' }));

  SwaggerInit(app);

  const PORT = configService.get('PORT');

  await app.listen(PORT);

  const appUrl = await app.getUrl();

  logger.log(`listening on ${appUrl}`);
}
bootstrap();
