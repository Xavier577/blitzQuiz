import { Request, Response, NextFunction as Next } from "express";

export default function authenticate(req: Request, res: Response, next: Next) {
  if (req.isAuthenticated()) return next();
  else return res.sendStatus(401);
}

/* 




*/
