import { Request, Response, NextFunction } from "express";

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.logOut(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ status: "success", message: "Successfully logged out." });
    });
  } catch (error) {
    next(error);
  }
};
export default logout;
