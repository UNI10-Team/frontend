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
import bundle from '../../../util/nls';
import history from "../../../history";

const news_messages = [
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
        const messages = bundle.messages;
        return (
            <div className={"home-page"}>
                <div className={"welcome-text-home"}>
                    {`${messages.WELCOME}, Alexandra!`}
                </div>
                <div>
                    <div className={"notifications"}>
                        <React.Fragment>
                            <CssBaseline/>
                            <Paper square>
                                <Typography className={"main-text-home"}>
                                    {messages.NEWS}
                                </Typography>
                                <List>
                                    {news_messages.map(({id, primary, secondary}) => (
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
                    <Button className={"big-button"} onClick={() => history.push('/student/profile')}>
                        <AccountCircleIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.PROFILE}</div>
                    </Button>
                    <Button className={"big-button"} onClick={() => history.push('/student/courses')}>
                        <FileCopyIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.COURSES}</div>
                    </Button>
                    <Button className={"big-button"}>
                        <ViewComfyIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.TIMETABLE}</div>
                    </Button>
                </div>



                <Button className={"button-turnoff-home"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-profile-home"} onClick={()=>history.push('/student/profile')}>
                    <AccountCircle className={"white-icon"}/>
                </Button>
            </div>
        );
    }
}