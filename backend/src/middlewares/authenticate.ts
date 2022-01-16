import { Request, Response, NextFunction as NF } from "express";

const authenticate = (req: Request, res: Response, next: NF) => {
  if (req.user) next();
  else res.status(401).send("not logged in");
};

export default authenticate;
