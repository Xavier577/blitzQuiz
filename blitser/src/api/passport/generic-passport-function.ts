import passport, { PassportStatic } from "passport";

type StrategyLogicFn = () => PassportStatic;

export default function GenericPassportFn(stragegyLogicFn: StrategyLogicFn) {
  stragegyLogicFn();

  passport.serializeUser(function (user, cb) {
    // @ts-ignore
    return cb(null, { id: user?.id, email: user?.email });
  });

  passport.deserializeUser(function (user, cb) {
    // @ts-ignore
    return cb(null, user);
  });
}
