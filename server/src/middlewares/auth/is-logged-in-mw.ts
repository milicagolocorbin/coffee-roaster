import { Request, Response, NextFunction } from "express";
import passport from "passport";

const isLoggedInMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(401).json({ message: info.message });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: "Please login with valid credentials." });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default isLoggedInMiddleware;
