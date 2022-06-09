import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './shared/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap();
