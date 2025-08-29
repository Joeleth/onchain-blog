import express from "express";
import { createPost } from "../controllers/newsController.js";

const router = express.Router();

router.post("/new-post", createPost);

export default router;
