import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config/secrets";
import User from "../models/users";

const GOOGLE_CALLBACK_URL = "/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async function (_req, _accessToken, _refreshToken, profile, cb) {
      const defaultUser = {
        firstName: profile.name?.givenName,
        lastName: profile.name?.familyName,
        email: profile.emails?.[0].value,
        profileImg: profile.photos?.[0].value,
        googleId: profile.id,
      };
      try {
        const user = await User.findOne({ googleId: profile.id }).exec();
        if (!user) {
          const newUser = new User({ ...defaultUser });
          await newUser.save();
          return cb(null, newUser);
        } else if (user) {
          return cb(null, user);
        }
      } catch (err) {
        cb(err, undefined);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  // @ts-ignore
  cb(null, user?.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id);
    cb(null, user);
  } catch (err) {
    cb(err, null);
  }
});
