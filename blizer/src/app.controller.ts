import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect()
  public async redirectToDocs() {
    return { url: '/api/docs', statusCode: 301 };
  }
}
