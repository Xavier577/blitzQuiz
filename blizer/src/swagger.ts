import { AuthenticationModule } from '@api/authentication/authentication.module';
import { UsersModule } from '@api/users/users.module';
import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export default function SwaggerInit(app: INestApplication) {
  const documentConfig = new DocumentBuilder()
    .setTitle('Blizer API documentation')
    .setDescription('Blizer API documentation')
    .setVersion('1.0')
    .addTag('API')
    .addCookieAuth()
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Blizer API',
    useGlobalPrefix: false,
  };

  const document = SwaggerModule.createDocument(app, documentConfig, {
    operationIdFactory: (_controllerKey, methodKey) => methodKey,
    include: [AuthenticationModule, UsersModule],
  });

  SwaggerModule.setup('/api/docs', app, document, customOptions);
}
