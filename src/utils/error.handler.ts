import { Response } from "express";

const handleHTTP = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send(error);
}

export { handleHTTP }