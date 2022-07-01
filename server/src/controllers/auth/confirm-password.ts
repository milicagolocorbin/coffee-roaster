import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import { generateRandomHash } from "../../config/auth/generate-secret";

const confirmPassword = async (
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
        "Looks like verification link is invalid."
      );
    }
    const { password } = req.body;
    // checking if new password is the same like old
    const isPasswordSame = await user?.comparePassword(password);
    if (isPasswordSame) {
      throw new createError.BadRequest("Please choose different password.");
    }
    // // checking if new password is the same like name or email
    if (
      password === user?.name ||
      password === user?.email ||
      password === user?.lastName
    ) {
      throw new createError.BadRequest("Name or email can't be a password.");
    }
    // // checking if it has been more than 1h since reset string has been sent
    if (+user?.passwordResetStringExp! < Date.now()) {
      throw new createError.BadRequest(
        "Looks like verification link  has expired."
      );
    }
    // // creating new password and removing all fields from db related to random reset string
    user.password = password;
    user.passwordResetString = undefined;
    user.passwordResetStringExp = undefined;
    await user.save();
    // // sending response to frontend
    res.status(200).json({
      status: "success",
      message: "Password successfully changed. You can now login.",
    });
  } catch (error) {
    next(error);
  }
};

export default confirmPassword;
