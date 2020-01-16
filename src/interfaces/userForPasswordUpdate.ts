import {Role} from "./role";
export default interface UserForPasswordUpdate{
    id:number;
    username: string;
    email: string;
    role: Role;
    firstName: string;
    lastName: string;
    password: string;
}
