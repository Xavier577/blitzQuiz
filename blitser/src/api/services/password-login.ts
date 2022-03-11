import { Request, Response } from "express";
import passport from "passport";
import {
  Strategy as LocalStrategy,
  IStrategyOptions,
  VerifyFunction,
} from "passport-local";
import GenericPassportFn from "../passport/generic-passport-function";
import bcrypt from "bcrypt";
import User from "../models/users";

export default function passwordAuth() {
  const localStrategyOptions: IStrategyOptions = { usernameField: "email" };
  const verify: VerifyFunction = async (email, password, cb) => {
    try {
      const user = await User.findOne({ email }).exec();

      if (user) {
        const storedHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(password, storedHash);
        if (isPasswordCorrect) return cb(null, user);
        return cb(null, false, { message: "incorrect password" });
      } else {
        return cb(null, false, { message: "user doesn't exist" });
      }
    } catch (err) {
      console.error(err);
      return cb(err);
    }
  };

  const localAuthStrategey = new LocalStrategy(localStrategyOptions, verify);

  GenericPassportFn(() => passport.use(localAuthStrategey));

  return passport.authenticate("local", {
    failureMessage: "failed to verify user credentials",
  });
}

export const passwordLoginSucess = (_req: Request, res: Response) => {
  res.sendStatus(200);
};

export const passwordLoginFailure = (_req: Request, res: Response) => {
  console.log(_req);
  res.status(401).send("invalid credentials");
};
