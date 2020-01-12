import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";
import {AuthenticationResponse, AuthenticationRequest } from "../interfaces/authentication"

export default class UserService {

    constructor(private restService: RestService) {
    }

    authenticate(request: AuthenticationRequest): Promise<AuthenticationResponse>{
        return this.restService.post(endpoints.authenticate, request);
    }
}

export const userService = new UserService(restService);
