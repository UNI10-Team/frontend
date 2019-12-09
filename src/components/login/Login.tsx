import React, {Component} from "react";
import Book from "../../interfaces/book";
import {UserService} from "../../services/UserService";
import {IoMdPerson, IoMdPersonAdd} from "react-icons/io";
import './Login.css';
import {StudentCoursesComponent} from "../student-courses/StudentCoursesComponent";

export interface LoginProperties {

}


export interface LoginState {
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
                            <IoMdPerson style={{"height":"inherit","width":"auto"}}/>
                        </div>
                    </div>
                </div>
                <div className={"second-white-rectangle"}>
                    <button className={"second-green-circle"}>
                        <div className={"register-icon"}>
                            <IoMdPersonAdd style={{"height":"inherit","width":"auto"}}/>
                        </div>
                    </button>
                </div>
                <div className={"right-component"}>
                    <form>
                        <div className={"login-text"}>Login</div>
                        <input type="text" id="fname" name="firstname" placeholder="Username.."
                               className={"username-input"}/>
                        <input type="password" id="fname" name="firstname" placeholder="Password.."
                               className={"password-input"}/>
                        <button className={"lets-go-button"}>
                            <div className={"lets-go-text"}>LET'S GO</div>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
