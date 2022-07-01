import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../../models/users/user-model";
import { IUser } from "../../types/user-interface";

const passportConfig = (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) {
            return done(null, false, { message: "Invalid credentials." });
          }
          const isMatch = await user.comparePassword(password);
          if (!isMatch) {
            return done(null, false, { message: "Invalid credentials." });
          }
          if (user.role === "temp") {
            return done(null, false, {
              message:
                "Please click on the activation link we sent to your email.",
            });
          }
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((user: IUser, cb) => {
    cb(null, user);
  });
};

export default passportConfig;
