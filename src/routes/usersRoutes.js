import { Router } from "express";
import { getUserInfo } from "../controllers/usersController.js"
import validateToken from "../middlewares/validateToken.js"

const router = Router();

router.get("/users/me", validateToken, getUserInfo);

export default router;