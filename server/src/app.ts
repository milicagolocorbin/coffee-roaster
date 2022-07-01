import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { sessionOptions } from "./config/auth/express-session-options";
import passportConfig from "./config/auth/passport-local";
// import custom middlewares
import notFoundMiddleware from "./middlewares/errors/not-found-mw";
import errorHandlerMiddleware from "./middlewares/errors/error-handler-mw";
// import routers
import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
//////////////////////////// end of imports ///////////////////////

const app: Express = express();
app.disable("x-powered-by");

// global middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));

// auth middleware
app.use(session(sessionOptions));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// routes middleware
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

// errors middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
