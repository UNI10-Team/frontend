import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {AccountCircle, SettingsPower} from "@material-ui/icons";
import './StudentHomePage.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const messages = [
    {
        id: 1,
        primary: 'LFTC',
        secondary: "S-a modificat deadline-ul pentru laboratorul 5!"
    },
    {
        id: 2,
        primary: 'PPD',
        secondary: "S-a modificat ponderea laboratorului 6."
    }
];

export interface HomeProperties {
}

export interface HomeState {
}

export class StudentHomePage extends Component<HomeProperties, HomeState> {
    constructor(props: HomeProperties) {
        super(props);
    }


    render() {

        return (
            <div className={"home-page"}>
                <div className={"welcome-text"}>Bine ai venit, Alexandra!</div>
                <div>

                    <div className={"notifications"}>
                        <React.Fragment>
                            <CssBaseline/>
                            <Paper square>
                                <Typography className={"main-text"}>
                                    Noutati
                                </Typography>
                                <List>
                                    {messages.map(({id, primary, secondary}) => (
                                        <React.Fragment key={id}>
                                            <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar><NotificationsIcon/></Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={primary} secondary={secondary}/>
                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </React.Fragment>
                    </div>
                    <Button className={"button"}>
                        <AccountCircleIcon className={"icon"}/>
                        <div className={"text-button"}>PROFIL</div>
                    </Button>
                    <Button className={"button"}>
                        <FileCopyIcon className={"icon"}/>
                        <div className={"text-button"}>CURSURI</div>
                    </Button>
                    <Button className={"button"}>
                        <ViewComfyIcon className={"icon"}/>
                        <div className={"text-button"}>ORAR</div>
                    </Button>
                </div>


                <Button className={"button-turnoff"}>
                    <SettingsPower/>
                </Button>
                <Button className={"button-profile"}>
                    <AccountCircle/>
                </Button>
            </div>
        );
    }
}
