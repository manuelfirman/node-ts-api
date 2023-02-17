import { Auth } from "../interfaces/auth.inteface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER";
    const passwordHash = await encrypt(password);
    const registerNewUser = await UserModel.create({
        email, 
        password: passwordHash, 
        name
    });

    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password; // encriptado
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECTO";

    const token = await generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    }

    return data;
}

export {
    registerNewUser,
    loginUser
}