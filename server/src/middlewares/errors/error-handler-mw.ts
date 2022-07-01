import { ErrorRequestHandler } from "express";
import { NextFunction, Request, Response } from "express";

const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err, err.status);
  res.status(err.status || 500).json({
    status: "error",
    message: err.status
      ? err.message
      : "Something went wrong, please try again later.",
  });
};

export default errorHandlerMiddleware;
