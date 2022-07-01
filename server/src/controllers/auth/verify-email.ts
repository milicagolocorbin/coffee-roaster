import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import { generateRandomHash } from "../../config/auth/generate-secret";

const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { verificationString } = req.params;
    // validation
    const activeToken = generateRandomHash(verificationString);
    const user = await User.findOne({ emailVerified: activeToken });
    if (!user) {
      throw new createError.BadRequest(
        "Looks like verification request has expired, or it has already been activated."
      );
    }
    // creating new user and removing all fields from db related to verify string
    user.role = "user";
    user.isActive = true;
    user.emailVerified = undefined;
    user.expireAt = undefined;
    await user.save();
    // sending response to frontend
    res.status(200).json({
      status: "success",
      message: "Email successfully activated. You can now log in.",
    });
  } catch (error) {
    next(error);
  }
};

export default verifyEmail;
