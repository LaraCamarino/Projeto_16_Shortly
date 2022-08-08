import { Router } from "express";
import { getUserInfo, getRanking } from "../controllers/usersController.js"
import validateToken from "../middlewares/validateToken.js"

const router = Router();

router.get("/users/me", validateToken, getUserInfo);
router.get("/ranking", getRanking)

export default router;