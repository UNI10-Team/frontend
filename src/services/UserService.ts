import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";
import {AuthenticationResponse, AuthenticationRequest} from "../interfaces/authentication"
import User from "../interfaces/user";

export default class UserService {

    constructor(private restService: RestService) {
    }

    authenticate(request: AuthenticationRequest): Promise<AuthenticationResponse> {
        return this.restService.post(endpoints.authenticate, request);
    }

    getCurrentUser(): Promise<User> {
        return this.restService.get(endpoints.currentUser);
    }

    isConnected(): boolean {
        return this.restService.jwt != "";
    }

}

export const userService = new UserService(restService);
