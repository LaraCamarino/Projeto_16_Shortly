import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import validateSignUp from "../middlewares/validateSignUp.js";

const router = Router();

router.post("/signup", validateSignUp, signUp);

export default router;