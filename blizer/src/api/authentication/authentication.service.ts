import { UsersService } from '@api/users/users.service';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from 'google-auth-library';
import { GoogleOAuth2Service } from 'nest-google-oauth2';

@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly googleOAuth2Service: GoogleOAuth2Service,
    private readonly userService: UsersService,
  ) {}

  public async getGoogleAuthUrl() {
    const scope = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ];

    return this.googleOAuth2Service.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope,
    });
  }

  public async fetchUserFromGoogle(payload: { code: string }) {
    try {
      const { code } = payload;

      const { tokens } = await this.googleOAuth2Service.getToken(code);

      const ticket = await this.googleOAuth2Service.verifyIdToken({
        idToken: tokens['id_token'],
        audience: this.configService.get('GOOGLE_CLIENT_ID'),
      });

      const responsePayload = ticket.getPayload();

      return responsePayload;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  public async handleGoogleAuth(googleUser: TokenPayload) {
    const { email, email_verified, given_name, name, picture } = googleUser;

    if (!email_verified) {
      throw new HttpException(
        'please verify your email from google to continue',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userExistingWithEmail = await this.userService.getUserByEmail(email);

    if (userExistingWithEmail != null) {
      return userExistingWithEmail;
    }

    const user = await this.userService.create({
      email: email,
      profile: {
        create: {
          email: email,
          firstName: given_name,
          lastName: name,
          profileImage: picture,
        },
      },
    });

    return user;
  }
}
