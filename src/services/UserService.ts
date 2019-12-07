import {restService, RestService} from "./RestService";
import {User} from "../interfaces/User";
import {users} from "../paths";

class UserService{

    constructor(private restService: RestService){

    }

    getUser(id: number): Promise<User>{
        return restService.get(`${users}/${id}`);
    }
}


export const userService = new UserService(restService);
