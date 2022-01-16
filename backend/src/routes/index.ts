import { Request, Response, Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (_req: Request, res: Response) => {
  res.send("<h1> BlitzQuiz server </h1>");
});

export default indexRouter;
