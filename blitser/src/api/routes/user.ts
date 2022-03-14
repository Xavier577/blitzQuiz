import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import getUser from "../controllers/get-user";
import updateUser from "../controllers/user-udpate";
import validateIncomingData from "../middlewares/validate-incoming-data";
import userUpdateFieldValidator from "../schema/update-fields-validation-schema";

const userRouter = Router();

userRouter.get("/", authenticate, getUser);

userRouter.put(
  "/update",
  authenticate,
  validateIncomingData(userUpdateFieldValidator),
  updateUser
);

export default userRouter;
