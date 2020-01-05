import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {SettingsPower} from "@material-ui/icons";
import './HomePage.css'
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
        primary: 'Silviu @ LFTC_C1',
        secondary: "E materia mea preferata!"
    },
    {
        id: 2,
        primary: 'Amalia @ PPD_C10',
        secondary: "Nu inteleg deloc acest curs."
    }
];

export interface HomeProperties {
}

export interface HomeState {
}

export class HomePage extends Component<HomeProperties, HomeState> {
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
                                                <Button className={"accept-button"}>Accepta</Button>
                                                <Button className={"decline-button"}>Refuza</Button>
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
                    <SettingsPower className={"icon-turn-off"}/>
                </Button>
            </div>
        );
    }
}
