import { Router } from "express";
import signUp from "../controllers/signup";
import passwordAuth, {
  passwordLoginFailure,
  passwordLoginSucess,
} from "../services/password-login";
import logOut from "../controllers/logout";
import validateIncomingData from "../middlewares/validate-incoming-data";
import signUpValidationSchema from "../schema/signup-validation-schema";
import passwordLoginValidationSchema from "../schema/login-validation-schema";

const authRouter = Router();

authRouter.post(
  "/signup",
  validateIncomingData(signUpValidationSchema),
  signUp
);
authRouter.post(
  "/login/password",
  validateIncomingData(passwordLoginValidationSchema),
  passwordAuth(),
  passwordLoginSucess
);
authRouter.get("/login/password/failure", passwordLoginFailure);
authRouter.post("/logout", logOut);

export default authRouter;
