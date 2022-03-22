import { Router } from "express";
import userRouter from "./user";
import authRouter from "./auth";
import quizRouter from "./quiz";

const apiRoutes = Router();

apiRoutes.use("/auth", authRouter);
apiRoutes.use("/user", userRouter);
apiRoutes.use("/quiz", quizRouter);

export default apiRoutes;
