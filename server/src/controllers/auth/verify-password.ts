import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import { generateRandomHash } from "../../config/auth/generate-secret";

const verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { resetString } = req.params;
    // validation
    const activeToken = generateRandomHash(resetString);
    const user = await User.findOne({ passwordResetString: activeToken });
    if (!user) {
      throw new createError.BadRequest(
        "Looks like you have not requested password change, or verification link got corrupted."
      );
    }
    if (user && +user?.passwordResetStringExp! < Date.now()) {
      user.passwordResetString = undefined;
      user.passwordResetStringExp = undefined;
      await user.save();
      throw new createError.BadRequest(
        "Looks like verification link has expired."
      );
    }
    // sending response to frontend
    res.status(200).json({
      status: "success",
      message: "Link successfully activated. You can now enter new password.",
    });
  } catch (error) {
    next(error);
  }
};

export default verifyPassword;
