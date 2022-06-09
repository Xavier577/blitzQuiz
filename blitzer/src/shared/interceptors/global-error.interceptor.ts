import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  InternalServerErrorException,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { catchError, Observable, throwError, TimeoutError } from 'rxjs';
import { TokenExpiredError } from 'jsonwebtoken';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export class GlobalErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error: any) => {
        switch (error) {
          case error instanceof TokenExpiredError:
            return throwError(() => new BadRequestException('invalid url'));
          case error instanceof PrismaClientKnownRequestError:
            return throwError(() => new BadRequestException(error.message));
          case error instanceof TimeoutError:
            return throwError(() => new RequestTimeoutException());
          default:
            return throwError(() => new InternalServerErrorException());
        }
      }),
    );
  }
}
