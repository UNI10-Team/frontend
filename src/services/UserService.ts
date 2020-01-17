import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";
import {AuthenticationResponse, AuthenticationRequest} from "../interfaces/authentication"
import User from "../interfaces/user";
import UserForPasswordUpdate from "../interfaces/userForPasswordUpdate";
import UserForRegister from "../interfaces/UserForRegister";


export default class UserService {

    constructor(private restService: RestService) {
    }

    authenticate(request: AuthenticationRequest): Promise<AuthenticationResponse> {
        return this.restService.post(endpoints.authenticate, request);
    }

    register(user : UserForRegister) : Promise<AuthenticationResponse>{
        return this.restService.post(endpoints.register, user)
    }

    getCurrentUser(): Promise<User> {
        return this.restService.get(endpoints.currentUser);
    }

    isConnected(): boolean {
        return this.restService.jwt != "";
    }

    updateUser(user: UserForPasswordUpdate): Promise<User> {
        return this.restService.put(`${endpoints.users}/${user.id}`, user);
    }

}

export const userService = new UserService(restService);
