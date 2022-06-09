import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../hash/hash.service';
import { UsersFactory } from '../users/users.factory';

@Injectable()
export class AuthService {
  constructor(
    private usersFactory: UsersFactory,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersFactory.findUserByEmail(email);
    const passMatch = await this.hashService.compare(pass, user.password);
    if (user && passMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
