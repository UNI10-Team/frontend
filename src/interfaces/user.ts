import {Role} from "./role";

export default interface User{
    id:number;
    username: string;
    email: string;
    password: string;
    role: Role;
    firstName: string;
    lastName: string;
}