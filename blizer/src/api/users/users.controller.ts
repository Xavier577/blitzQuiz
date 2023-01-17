import { SessionUser } from '@common/decorators/session-user.decorator';
import { Serialize } from '@common/interceptors/serializer.interceptor';
import { SerializedSessionUser } from '@common/interfaces';
import { Controller, Get } from '@nestjs/common';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from './dtos/getuser.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiCookieAuth()
  @Serialize(GetUserDto)
  public async getUser(@SessionUser() sessionUser: SerializedSessionUser) {
    const user = await this.usersService.getUserById(sessionUser.id);

    return { statusCode: 200, message: 'success', data: user };
  }
}
