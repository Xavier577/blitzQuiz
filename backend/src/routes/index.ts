import { Request, Response, Router } from "express";
import { CLIENT_URL } from "../config/secrets";
import authRouter from "./auth";
import userRouter from "./user";

const indexRouter = Router();

indexRouter.get("/", (_req: Request, res: Response) => {
  res.redirect(CLIENT_URL);
});
indexRouter.use("/auth", authRouter);
indexRouter.use("/user", userRouter);

export default indexRouter;
