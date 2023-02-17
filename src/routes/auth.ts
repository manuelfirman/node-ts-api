import { Router, Request, Response } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.ctrl"

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };