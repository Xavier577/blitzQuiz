import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import fetchUser from "../controllers/fetch-user";

const userRouter = Router();

userRouter.get("/", authenticate, fetchUser);

export default userRouter;
