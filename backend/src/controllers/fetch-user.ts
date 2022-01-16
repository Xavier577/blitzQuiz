import { Request, Response } from "express";

const fetchUser = (req: Request, res: Response) => {
  res.send(req.user);
};

export default fetchUser;
