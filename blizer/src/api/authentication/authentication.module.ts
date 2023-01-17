import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { GoogleOAuth2Module } from 'nest-google-oauth2';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '@api/users/users.module';

@Module({
  imports: [
    ConfigModule,
    GoogleOAuth2Module.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          redirectUri: configService.get('GOOGLE_REDIRECT_URL'),
          clientId: configService.get('GOOGLE_CLIENT_ID'),
          clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
        };
      },
    }),
    UsersModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
