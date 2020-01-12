import {Role} from "./role";

export default interface User{
    id:number;
    username: string;
    email: string;
    role: Role;
    firstName: string;
    lastName: string;
}
