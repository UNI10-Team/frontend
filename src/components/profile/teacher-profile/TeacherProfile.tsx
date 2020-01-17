import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Home, SettingsPower} from "@material-ui/icons";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PortraitIcon from '@material-ui/icons/Portrait';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './TeacherProfile.css';
import '../Profile.css';
import history from "../../../history";
import {i18NService} from "../../../services/I18NService";
import User from '../../../interfaces/user';
import UserForPasswordUpdate from '../../../interfaces/userForPasswordUpdate';
import {Role} from '../../../interfaces/role';
import {userService} from '../../../services/UserService';
import {restService} from "../../../services/RestService";

export interface TeacherProfileProperties {
}

export interface TeacherProfileState {
    currentUser: User;
    userUpdated:UserForPasswordUpdate;
    newPassword:string;
    repeatNewPassword:string;
    show:boolean;
}

export class TeacherProfile extends Component<TeacherProfileProperties, TeacherProfileState> {

    constructor(props: TeacherProfileProperties) {
        super(props);
        const userNull : User = {
            email: "",
            firstName: "",
            id: 1,
            lastName: "",
            role: Role.ROLE_COURSE_TEACHER,
            username: "",
        };
        const userUpdatedNull : UserForPasswordUpdate = {
            email: "",
            firstName: "",
            id: 1,
            lastName: "",
            role: Role.ROLE_COURSE_TEACHER,
            username: "",
            password: ""

        };
        this.state = {
            currentUser:userNull,
            userUpdated:userUpdatedNull,
            newPassword:"",
            repeatNewPassword:"",
            show:false
        };
    }

    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"teacher-profile"}>
                <div className={"grey-rectangle-profile"}>
                    <div className={"profile-icon-teacher"}>
                        <div className={"welcome-text-profile"}>
                            {`${messages.HELLO}!`}
                        </div>
                    </div>

                    <div className={"light-grey-rectangle-1"}>
                        <form>
                            <div className={"main-text-profile"}>
                                {messages.CHANGE_PASSWORD}
                            </div>
                            <input type="password" id="npassword" name="newpassword" placeholder="Parola noua"
                                   className={"password-input-profile"}
                                   onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {
                                       this.setState({
                                           newPassword: event.target.value
                                       })}}
                            />
                            <input type="password" id="rpassword" name="repeatpassword" placeholder="Repeta parola noua"
                                   className={"password-input-profile"}
                                   onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {
                                       this.setState({
                                           repeatNewPassword: event.target.value
                                       })}}
                            />
                            <Button className={"submit-button"}
                                    onClick={() => {
                                if( this.state.newPassword!='' && this.state.repeatNewPassword!='') {
                                    if (this.state.newPassword === this.state.repeatNewPassword) {
                                        let userUpdatedLocal = this.state.userUpdated;
                                        userUpdatedLocal.password = this.state.newPassword;
                                        this.setState({userUpdated:userUpdatedLocal});
                                        userService.updateUser(this.state.userUpdated);
                                        restService.removeJWT();
                                        history.push('/');
                                    }
                                    else{
                                        alert(messages.INCORECT_PASSWORDS);
                                    }
                                }
                            }}>
                                {messages.RESET_PASSWORD}

                            </Button>
                        </form>
                    </div>

                    <div className={"light-grey-rectangle-2-teacher"}>
                        <List className={"root-profile"}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><PortraitIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary= {`${this.state.currentUser.lastName} ${this.state.currentUser.firstName}`}
                                    secondary= "Nume"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><MailOutlineIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${this.state.currentUser.email}`}
                                    secondary="Email"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><LocationOnIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Universitatea Babeş-Bolyai Cluj-Napoca
                                             Facultatea de Matematică şi Informatică
                                             Str. Mihail Kogălniceanu, nr. 1
                                             RO-400084 Cluj-Napoca"
                                    secondary="Adresa de contact"
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <Button className={"button-turnoff"}
                        onClick={()=>{
                            restService.removeJWT();
                            history.push("/");
                        }}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-home"} onClick={()=>history.push('/teacher/home')}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }

    componentDidMount(): void {
        userService.getCurrentUser().then((response: User) => {
            let userUp: UserForPasswordUpdate = {
                id: response.id,
                email: response.email,
                username: response.username,
                firstName: response.firstName,
                lastName: response.lastName,
                role: response.role,
                password: ''
            }

            this.setState({currentUser: response, userUpdated:userUp});
        });
    }
}
