import React, {Component} from "react";
import {IoMdPerson, IoMdPersonAdd} from "react-icons/io";
import './Register.css';
import history from "../../history";
import {i18NService} from "../../services/I18NService";

export interface registerProperties {

}


export interface registerState {
}


export default class Register extends Component<registerProperties, registerState> {

    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"login-component"}>
                <div className={"image-left-component"}>
                    <div className={"login-page-image"}/>
                    <text className={"welcome-text-register"}>{messages.WELCOME_TO_UNI10}</text>
                    <div className={"welcome-text-line"}/>
                </div>
                <div className={"white-rectangle"}>
                    <button className={"first-green-circle"} onClick={() => history.push('/login')}>
                        <div className={"login-icon"}>
                            <IoMdPerson style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </button>
                </div>
                <div className={"second-white-rectangle"}>
                    <div className={"second-green-circle"}>
                        <div className={"register-icon"}>
                            <IoMdPersonAdd style={{"height": "inherit", "width": "auto"}}/>
                        </div>
                    </div>
                </div>
                <div className={"right-component"}>
                    <form>
                        <text className={"login-text"}>{messages.REGISTER}</text>
                        <input type="email" id="email" name="email" placeholder="E-mail address.."
                               className={"email-input"}/>
                        <input type="text" id="fname" name="firstname" placeholder="Username.."
                               className={"username-input"}/>
                        <input type="password" id="pass" name="password" placeholder="Password.."
                               className={"password-input"}/>
                        <input type="rpassword" id="rpass" name="password" placeholder="Repeat password.."
                               className={"repeat-password-input"}/>
                        <button className={"lets-start-button"}>
                            <div className={"lets-start-text"}>{messages.LET_S_START}</div>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
};
