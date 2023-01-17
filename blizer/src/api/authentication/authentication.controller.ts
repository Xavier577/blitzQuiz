import {
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthenticationService } from './authentication.service';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  private readonly logger = new Logger(AuthenticationController.name);

  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get('oauth/google')
  @Redirect()
  public async googleAuth() {
    const googleAuthUrl = await this.authenticationService.getGoogleAuthUrl();

    return { url: googleAuthUrl, statusCode: 301 };
  }

  @Get('google/redirect')
  public async handleGoogleOAuth(
    @Query('code') code: string,
    @Req() req: Request,
  ) {
    const googleUser = await this.authenticationService.fetchUserFromGoogle({
      code,
    });

    const user = await this.authenticationService.handleGoogleAuth(googleUser);

    req.session['user'] = {
      id: user.id,
      email: user.email,
    };

    req.session.save((err) => {
      if (err != null) {
        this.logger.error(err);
        throw new InternalServerErrorException();
      }
    });

    return { statusCode: 200, message: 'success' };
  }

  @Get('logout')
  @ApiCookieAuth()
  public async logout(@Req() req: Request) {
    req.session.destroy((err) => {
      if (err != null) {
        this.logger.error(err);
        throw new InternalServerErrorException();
      }
    });

    return { statusCode: 200, message: 'successfully logged out' };
  }
}
