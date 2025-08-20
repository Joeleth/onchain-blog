import express from "express";
import { newsApi } from "../controllers/newsController.js";

const router = express.Router();

router.get("/onchain-news", newsApi);

export default router;
 