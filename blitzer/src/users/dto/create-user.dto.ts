import { Prisma } from '@prisma/client';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
