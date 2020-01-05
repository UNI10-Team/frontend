import React, {Component} from "react";
import UserService, {userService} from "../../services/UserService";
import RestService, {restService} from "../../services/RestService";
import {IoMdPerson, IoMdPersonAdd} from "react-icons/io";
import './Login.css';
import {StudentCoursesComponent} from "../student-courses/StudentCoursesComponent";
import {AuthenticationRequest, AuthenticationResponse} from "../../interfaces/authentication";

export interface LoginProperties {

}


export interface LoginState {
    username: string;
    password: string;
}

export class Login extends Component<LoginProperties, LoginState> {

    constructor(props: LoginProperties) {
        super(props);
    }

    render() {
        return (
            <div className={"login-component"}>
                <div className={"image-left-component"}>
                    <div className={"login-page-image"}/>
                    <div className={"welcome-text"}>Welcome to UNI10</div>
                    <div className={"welcome-text-line"}/>
                </div>
                <div className={"white-rectangle"}>
                    <div className={"first-green-circle"}>
                        <div className={"login-icon"}>
                            <IoMdPerson style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </div>
                </div>
                <div className={"second-white-rectangle"}>
                    <button className={"second-green-circle"}>
                        <div className={"register-icon"}>
                            <IoMdPersonAdd style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </button>
                </div>
                <div className={"right-component"}>
                    <div className={"login-text"}>Login</div>
                    <input type="text" id="username" name="username" placeholder="Username.."
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               this.setState({
                                   username: event.target.value
                               })
                           }}
                           className={"username-input"}/>
                    <input type="password" id="password" name="password" placeholder="Password.."
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               this.setState({
                                   password: event.target.value
                               })
                           }}
                           className={"password-input"}/>
                    <button className={"lets-go-button"} onClick={() => {
                        const {username, password} = this.state;
                        userService.authenticate({username, password}).then((response: AuthenticationResponse) => {
                            restService.addJWT(response.jwt);
                            console.log("S-a logat " + response.jwt);
                        });
                        console.log(username);
                    }}>
                        <div className={"lets-go-text"}>LET'S GO</div>
                    </button>
                </div>
            </div>
        );
    }
}
