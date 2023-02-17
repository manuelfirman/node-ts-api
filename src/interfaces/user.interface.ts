import { Auth } from "../interfaces/auth.inteface";

export interface User extends Auth{
    name: string,
    description: string,
}