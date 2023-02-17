import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser?.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if (!isUser) {
            return res.status(401).send("Invalid JWT");
        } else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export { checkSession };