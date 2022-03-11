import { Router } from "express";
import userRouter from "./user";
import authRouter from "./auth";

const apiRoutes = Router();

apiRoutes.use("/auth", authRouter);
apiRoutes.use("/user", userRouter);

export default apiRoutes;
