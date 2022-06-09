import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import AsyncHook from '../shared/helpers/async-hook';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  encode(payload: any, options?: JwtSignOptions) {
    return this.jwtService.signAsync(payload, options);
  }

  async decode(token: string): Promise<[any, boolean, JsonWebTokenError]> {
    let isExpired = false;
    const [payload, err] = await AsyncHook(this.jwtService.verifyAsync(token));
    if (err instanceof TokenExpiredError) isExpired = true;
    return [payload, isExpired, err];
  }
}
