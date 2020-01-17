import React, {Component} from "react";
import {userService} from "../../services/UserService";
import {restService} from "../../services/RestService";
import {IoMdPerson, IoMdPersonAdd} from "react-icons/io";
import './Login.css';
import {AuthenticationResponse} from "../../interfaces/authentication";
import {Role} from "../../interfaces/role";
import history from "../../history";
import {i18NService} from "../../services/I18NService";

export interface LoginProperties {

}


export interface LoginState {
    username: string;
    password: string;
}

export class Login extends Component<LoginProperties, LoginState> {


    constructor(props: Readonly<LoginProperties>) {
        super(props);
        this.state = {
            username: 'student232',
            password: 'password'
        }
    }

    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"login-component"}>
                <div className={"image-left-component"}>
                    <div className={"login-page-image"}/>
                    <div className={"welcome-text-login"}>{messages.WELCOME_TO_UNI10}</div>
                    <div className={"welcome-text-line"}/>
                </div>
                <div className={"white-rectangle"}>
                    <div className={"first-green-circle-login"}>
                        <div className={"login-icon"}>
                            <IoMdPerson style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </div>
                </div>
                <div className={"second-white-rectangle"}>
                    <button className={"second-green-circle-login"} onClick={() => history.push('/register')}>
                        <div className={"register-icon"}>
                            <IoMdPersonAdd style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </button>
                </div>
                <div className={"right-component-login"}>
                    <div className={"login-text"}>{messages.LOGIN}</div>
                    <input type="text" id="username" name="username" placeholder="Username..."
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               this.setState({
                                   username: event.target.value
                               })
                           }}
                           className={"username-input"}/>
                    <input type="password" id="password" name="password" placeholder="Password..."
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
                            const ROLE = restService.parseJWT().ROLES[0];
                            if (ROLE === Role.ROLE_STUDENT) {
                                history.push("/student/home");
                            }
                            else if (ROLE === Role.ROLE_ADMIN) {
                                //TO DO
                            } else {
                                history.push("/teacher/home");
                            }
                        }).catch(error => {
                            console.log(error);
                        });

                        console.log(username);
                    }}>

                        <div className={"lets-go-text"}>{messages.LET_S_GO}</div>
                    </button>
                </div>
            </div>
        );
    }
}
