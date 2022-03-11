import { Request, Response } from "express";

export default function logOut(req: Request, res: Response) {
  try {
    req.logout();
    res.status(200).json({ successMessage: "user successfully logged out" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
