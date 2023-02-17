import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../service/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });

    if(responseUser === "PASSWORD_INCORRECTO"){
        res.status(403);
        return res.send(responseUser);
    }

    res.send(responseUser)
}

export { registerCtrl, loginCtrl };