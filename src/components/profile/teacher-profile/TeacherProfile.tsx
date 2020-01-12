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
import bundle from "../../../util/nls";
import history from "../../../history";
import User from '../../../interfaces/user';
import {Role} from '../../../interfaces/role';
import UserService, {userService} from '../../../services/UserService';

export interface TeacherProfileProperties {
}

export interface TeacherProfileState {
    currentUser: User;
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
        this.state = {currentUser:userNull};
    }

    render() {
        const messages = bundle.messages;
        userService.getCurrentUser().then((response: User) => {
            this.setState({currentUser: response});
        });
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
                            <input type="password" id="opassword" name="oldpassword" placeholder="Parola curenta"
                                   className={"password-input-profile"}/>
                            <input type="password" id="npassword" name="newpassword" placeholder="Parola noua"
                                   className={"password-input-profile"}/>
                            <input type="password" id="rpassword" name="repeatpassword" placeholder="Repeta parola noua"
                                   className={"password-input-profile"}/>
                            <Button className={"submit-button"}>
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
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-home"} onClick={()=>history.push('/teacher/home')}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }
}
