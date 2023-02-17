import { Request, response, Response } from "express";
import { insertCar, getCar, getCars, updateCar, deleteCar } from "../service/item.service";
import { handleHTTP } from "../utils/error.handler"

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHTTP(res, "ERROR_GET_ITEM", e);
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHTTP(res, "ERROR_GET_ITEMS", e);
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHTTP(res, "ERROR_UPDATE_ITEM", e);
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHTTP(res, "ERROR_POST_ITEM", e);
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        const data = response ? response : "NOT_FOUND"
        res.send(data);
    } catch (e) {
        handleHTTP(res, "ERROR_DELETE_ITEM", e);
    }
}


export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}