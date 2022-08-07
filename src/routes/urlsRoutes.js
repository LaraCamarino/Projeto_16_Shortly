import { Router } from "express";
import { shortenUrl, getUrlById, redirectToUrl } from "../controllers/urlsController.js";
import validateToken from "../middlewares/validateToken.js";
import validateUrl from "../middlewares/validateUrl.js";

const router = Router();

router.post("/urls/shorten", validateToken, validateUrl, shortenUrl);
router.get("/urls/:id", getUrlById);
router.get("/urls/open/:shortUrl", redirectToUrl);


export default router;