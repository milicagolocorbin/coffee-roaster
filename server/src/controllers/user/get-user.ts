import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import User from "../../models/users/user-model";
import { IUser } from "../../types/user-interface";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ user: req.user });
};

export default getUser;
