import express from "express";
import { googleAuth, signIn, signOut, signUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/google-auth", googleAuth);
router.post("/sign-out", signOut);

export default router;
