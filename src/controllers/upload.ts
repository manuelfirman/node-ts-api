import { Request, Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { handleHTTP } from "../utils/error.handler";
import { registerUpload } from "../service/storage.service";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        }
        const response = await registerUpload(dataToRegister);
        res.send(response);
    } catch (e) {
        handleHTTP(res, "ERROR_GET_FILE", e);
    }
}

export { getFile };