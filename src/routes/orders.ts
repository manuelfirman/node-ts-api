import { Router, Request, Response } from "express";
import { getItems } from "../controllers/orders.ctrl";
import { checkSession } from "../middlewares/session";

const router = Router();

// Solo puede accederse con sesion activa (JWT)
router.get("/", checkSession, getItems);

export { router };