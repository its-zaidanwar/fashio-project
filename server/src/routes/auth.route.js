import express from "express";
import { getme, login, refresh, register } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validator/auth.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/auth/register" , registerValidator ,  register)
router.post("/auth/login" , loginValidator ,login)
router.post("/auth/refresh" , refresh)
router.get("/auth/me" , authenticate , getme)

export default router;