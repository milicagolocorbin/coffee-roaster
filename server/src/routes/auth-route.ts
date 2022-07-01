import { Router } from "express";
import {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  verifyPassword,
  confirmPassword,
} from "../controllers/auth";
import isLoggedInMiddleware from "./../middlewares/auth/is-logged-in-mw";

const router = Router();

router.post("/register", register);
router.get("/verify/:verificationString", verifyEmail);
router.post("/login", isLoggedInMiddleware, login);
router.get("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.route("/reset/:resetString").get(verifyPassword).patch(confirmPassword);

export default router;
