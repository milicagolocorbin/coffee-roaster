import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import { IUser } from "../../types/user-interface";
import sendEmail from "./../../config/auth/send-email";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, lastName, email, password }: IUser = req.body;
    // validation
    const userExists = await User.findOne({ email });
    if (userExists && userExists.role !== "temp") {
      throw new createError.BadRequest(
        "You already have account created. Please log in."
      );
    }
    if (userExists) {
      throw new createError.Conflict(
        "Please click on the activation link we sent to your email."
      );
    }
    // creating temporary user in db
    const tempUser = await User.create({ name, lastName, email, password });
    // creating random verification string and save it in db
    const verificationString = tempUser.verifyEmail();
    await tempUser.save();

    // sending email with verification string to temp user as link
    const link = `${process.env.CLIENT_ORIGIN}/auth/verify/${verificationString}`;
    let html = `<h2>Hi ${tempUser.name.toUpperCase()}.</h2>\n<h3>Please click on the following <a href="${link}">link</a> to activate your account.</h3>\n<h3>If you did not request this, please ignore this email.</h3>`;
    const mailOptions = {
      to: tempUser.email,
      from: `${process.env.SEND_EMAIL_FROM}`,
      subject: "Verification email (valid for 1 hour).",
      html,
    };
    await sendEmail(mailOptions);
    // sending response to frontend
    res.status(200).json({
      status: "success",
      message: `Email sent to ${tempUser.email}. Please click on the link to activate your account.`,
    });
  } catch (error) {
    next(error);
  }
};

export default register;
