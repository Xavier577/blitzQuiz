import { Router } from "express";
import { googleSignIn, googleSSOCb } from "../services/google-sso";
import ssoResponse from "../controllers/sso-response";

const authRouter = Router();

authRouter.get("/google", googleSignIn());
authRouter.get("/google/callback", googleSSOCb(), ssoResponse);

export default authRouter;
