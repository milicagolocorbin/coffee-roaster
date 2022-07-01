import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      throw new createError.Unauthorized(
        "Please login with valid credentials."
      );
    }
    // We have to call req.logIn() to establish a session and send a response.
    req.logIn(req.user, (err) => {
      if (err) return next(err);
      res.status(200).json({
        success: true,
        message: "Successfully logged in.",
        user: req.user,
        expiresAt: new Date().getTime() + Number(process.env.SESSION_MAX_AGE),
      });
    });
  } catch (error) {
    next(error);
  }
};
export default login;
