import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import './StudentProfile.css';
import '../Profile.css';
import {Home, SettingsPower} from "@material-ui/icons";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PortraitIcon from '@material-ui/icons/Portrait';
import InfoIcon from '@material-ui/icons/Info';
import history from "../../../history";
import {i18NService} from "../../../services/I18NService";
import User from '../../../interfaces/user';
import {Role} from '../../../interfaces/role';
import {userService} from '../../../services/UserService';

export interface StudentProfileProperties {
}

export interface StudentProfileState {
    currentUser: User;
}

export class StudentProfile extends Component<StudentProfileProperties, StudentProfileState> {

    constructor(props: StudentProfileProperties) {
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
        const messages = i18NService.getBundle();
        return (
            <div className={"student-profile"}>
                <div className={"grey-rectangle-profile"}>
                    <div className={"profile-icon-student"}>
                        <div className={"welcome-text-profile"}>
                            {`${messages.WELCOME}, ${this.state.currentUser.firstName}!`}
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

                    <div className={"light-grey-rectangle-2-student"}>
                        <List className={"root-profile"}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><PortraitIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${this.state.currentUser.lastName} ${this.state.currentUser.firstName}`}
                                    secondary="Nume si prenume"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><MailOutlineIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${this.state.currentUser.email}`}
                                    secondary="Email"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><InfoIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Informatica Romana"
                                    secondary="Specializare"
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-home"} onClick={()=>history.push('/student/home')}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }

    componentDidMount(): void {
        userService.getCurrentUser().then((response: User) => {
            this.setState({currentUser: response});
        });
    }
}
