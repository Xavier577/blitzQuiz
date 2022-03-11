import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import getUser from "../controllers/get-user";

const userRouter = Router();

userRouter.get("/", authenticate, getUser);

export default userRouter;
