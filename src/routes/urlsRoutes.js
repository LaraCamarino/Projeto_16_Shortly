import { Router } from "express";
import { shortenUrl } from "../controllers/urlsController.js";
import validateToken from "../middlewares/validateToken.js";
import validateUrl from "../middlewares/validateUrl.js";

const router = Router();

router.post("/urls/shorten", validateToken, validateUrl, shortenUrl);

export default router;