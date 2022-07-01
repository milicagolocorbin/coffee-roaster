import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import sendEmail from "../../config/auth/send-email";

const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email }: { email: string } = req.body;
    // validation
    const user = await User.findOne({ email });
    if (!user) {
      throw new createError.BadRequest("Please provide valid credentials.");
    }
    if (user.role === "temp") {
      throw new createError.BadRequest("Please activate your account first.");
    }
    if (user.passwordResetString) {
      throw new createError.BadRequest("We already sent you email.");
    }
    // creating random reset string
    const resetString = user.verifyPassword();
    await user.save();
    // sending email with reset string to user as link
    const link = `${process.env.CLIENT_ORIGIN}/auth
    /reset/${resetString}`;
    let html = `<h2>Hi ${user.name.toUpperCase()}.</h2>\n<h3>Please click on the following <a href="${link}">link</a> to reset your password.</h3>\n<h3>If you did not request this, please ignore this email and your password will remain unchanged.</h3>`;
    const mailOptions = {
      to: user.email,
      from: `${process.env.SEND_EMAIL_FROM}`,
      subject: "Reset password request (valid for 1 hour)",
      html,
    };
    await sendEmail(mailOptions);
    // sending response to frontend
    res.status(200).json({
      status: "success",
      message: `Email sent to ${user.email}. Please click on the link to access the page where you can enter new password.`,
    });
  } catch (error) {
    next(error);
  }
};

export default forgotPassword;
