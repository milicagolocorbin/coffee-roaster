import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

const notFoundMiddleware = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(new createError.NotFound("This route does not exist!"));
};

export default notFoundMiddleware;
