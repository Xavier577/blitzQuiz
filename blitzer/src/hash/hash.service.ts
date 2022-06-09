import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class HashService {
  async hash(pass: string): Promise<string> {
    const hash = await argon2.hash(pass);
    return hash;
  }

  async compare(pass: string, hash: string): Promise<boolean> {
    const matches = await argon2.verify(hash, pass);
    return matches;
  }
}
