import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_LINK_TOKEN_SECRET } from '../shared/constants';

@Module({
  imports: [JwtModule.register({ secret: JWT_LINK_TOKEN_SECRET })],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
