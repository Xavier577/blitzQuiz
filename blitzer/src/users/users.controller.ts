import {
  Controller,
  Get,
  Body,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../shared/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(
    @Body(new ValidationPipe({ whitelist: true })) createUserDto: CreateUserDto,
  ) {
    const [user, err] = await this.usersService.createUser(createUserDto);
    if (err)
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    return { msg: 'user sucessfully created!', user };
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUser(@Request() req) {
    return req.user;
  }
}
