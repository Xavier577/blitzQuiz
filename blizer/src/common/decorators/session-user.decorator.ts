import { SerializedSessionUser } from '@common/interfaces';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

const SessionUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest() as unknown as Request;
    const user: SerializedSessionUser = request.session['user'];

    return user;
  },
);

export { SessionUser };
