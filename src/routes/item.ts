import { Router, Request, Response } from "express";
import { logMiddleware } from "../middlewares/log";
import { 
    deleteItem, 
    getItem, 
    getItems, 
    postItem, 
    updateItem 
} from "../controllers/item.ctrl";

const router = Router();

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.put("/:id", updateItem);

router.post("/", postItem);

router.delete("/:id", deleteItem);


export { router };