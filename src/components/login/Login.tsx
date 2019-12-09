import React, {Component} from "react";
import Book from "../../interfaces/book";
import {UserService} from "../../services/UserService";
import {IoMdPerson, IoMdPersonAdd} from "react-icons/io";
import './Login.css';

export interface LoginProperties {

}


export interface LoginState {
    books: Book[]
}

export class Login extends Component<LoginProperties, LoginState> {

    constructor(private bookService: UserService, props: LoginProperties) {
        super(props);
    }

    render() {
        return (
            <div className={"login-component"}>
                <div className={"image-left-component"}>
                    <div className={"login-page-image"}/>
                    <text className={"welcome-text"}>Welcome to UNI10</text>
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
                        <text className={"login-text"}>Login</text>
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
