import { Module } from '@nestjs/common';
import { HashModule } from 'src/hash/hash.module';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JWT_AUTH_SECRET } from '../shared/constants';

@Module({
  imports: [
    UsersModule,
    HashModule,
    JwtModule.register({
      secret: JWT_AUTH_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
