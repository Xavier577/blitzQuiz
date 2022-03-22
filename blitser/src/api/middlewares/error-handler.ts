import {
  ErrorRequestHandler as Error,
  Request,
  Response,
  NextFunction as NextFn,
} from "express";

export const internalErrorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFn
) => {
  console.error(err);
  return res.sendStatus(500);
};
