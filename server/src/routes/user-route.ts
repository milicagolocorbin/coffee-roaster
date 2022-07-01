import { Router } from "express";
import { getUser } from "../controllers/user";

const router = Router();

router.get("/get-user", getUser);

export default router;
