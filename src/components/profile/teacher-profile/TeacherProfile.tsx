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

export interface TeacherProfileProperties {
}

export interface TeacherProfileState {
}

export class TeacherProfile extends Component<TeacherProfileProperties, TeacherProfileState> {

    constructor(props: TeacherProfileProperties) {
        super(props);
    }

    render() {
        return (
            <div className={"teacher-profile"}>
                <div className={"grey-rectangle-profile"}>
                    <div className={"profile-icon-teacher"}>
                        <div className={"welcome-text-profile"}>SALUT!
                        </div>
                    </div>

                    <div className={"light-grey-rectangle-1"}>
                        <form>
                            <div className={"main-text-profile"}>Schimbare parola</div>
                            <input type="password" id="opassword" name="oldpassword" placeholder="Parola curenta"
                                   className={"password-input-profile"}/>
                            <input type="password" id="npassword" name="newpassword" placeholder="Parola noua"
                                   className={"password-input-profile"}/>
                            <input type="password" id="rpassword" name="repeatpassword" placeholder="Repeta parola noua"
                                   className={"password-input-profile"}/>
                            <Button className={"submit-button"}>
                                Reseteaza parola
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
                                    primary="Czibula Gabriela"
                                    secondary="Nume si prenume"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><MailOutlineIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="gabis@cs.ubbcluj.ro"
                                    secondary="Email"
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar><LocationOnIcon/></Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Strada Mihail Kogălniceanu 1, Cluj-Napoca 400000"
                                    secondary="Adresa de contact"
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-home"}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }
}
