import passport from "passport";
import "../auth/google-auth";

export const googleSignIn = () =>
  passport.authenticate("google", { scope: ["email", "profile"] });

export const googleSSOCb = () =>
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
  });
