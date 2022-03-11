import { Request, Response } from "express";

export default function getUser(req: Request, res: Response) {
  res.send(req.user);
}
