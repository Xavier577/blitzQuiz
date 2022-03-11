import { Request, Response } from "express";

export default function authSuccess(__req: Request, res: Response) {
  res.send({ message: "successfully loggediN" });
}
