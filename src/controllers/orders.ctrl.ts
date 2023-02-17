import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handler";
import { getOrders } from "../service/orders.service";
import { RequestExt } from "../interfaces/requestExt.interface";

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo se puede ver si tenes la sesion iniciada / JWT",
            user: req.user,
        });
    } catch (e) {
        handleHTTP(res, "ERROR_GET_ITEM", e);
    }
}

export { getItems };