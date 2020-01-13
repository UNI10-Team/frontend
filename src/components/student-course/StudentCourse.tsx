import React, {Component} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {
    withStyles
} from "@material-ui/core/styles";
import "./StudentCourse.css";
import bundle from "../../util/nls";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {
    MdDesktopMac,
    MdFolderOpen,
    MdLaptop,
    MdSend,
    MdModeComment
} from "react-icons/md";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const news_messages = [
    {
        id: 1,
        primary: "S-au modificat deadline-ul si cerinta de la laboratorul 5!"
    },
    {
        id: 2,
        primary: "S-a modificat ponderea laboratorului 6."
    }
];

const comments = [
    {
        id: 1,
        primary: "Valentina",
        secondary: "Iubesc proiectul colectiv"
    }
];

export interface StudentCourseProperties {
}

export interface StudentCourseState {
}

export class StudentCourse extends Component<StudentCourseProperties,
    StudentCourseState> {
    constructor(props: StudentCourseProperties) {
        super(props);
    }

    render() {
        const messages = bundle.messages;
        return (
            <div className={"student-course-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>Numele Cursului</div>
                </div>
                <div className={"course-logo"}/>
                <div className={"grey-rectangle"}>
                    <div className={"news-rectangle"}>
                        <div className={"rectangle-text"}>{messages.WHATS_NEW}</div>
                        <List>
                            {news_messages.map(({id, primary}) => (
                                <React.Fragment key={id}>
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <NotificationsIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <div className={"news-text"}>
                                            <ListItemText disableTypography primary={primary}/>
                                        </div>
                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </List>
                    </div>
                    <div className={"comments-rectangle"}>
                        <div className={"rectangle-text"}>{messages.COMMENTS}</div>
                        <div className={"comments-inside-rectangle"}>
                            <List>
                                {comments.map(({id, primary, secondary}) => (
                                    <React.Fragment key={id}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <MdModeComment/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <div>
                                                <ListItemText
                                                    primary={primary}
                                                    secondary={secondary}
                                                    secondaryTypographyProps={{
                                                        style: {color: "white"}
                                                    }}
                                                    primaryTypographyProps={{
                                                        style: {color: "white", fontWeight: "bold"}
                                                    }}
                                                />
                                            </div>
                                        </ListItem>
                                    </React.Fragment>
                                ))}
                            </List>
                        </div>
                        <input
                            type="text"
                            id="comment"
                            name="comment"
                            placeholder="Adauga un comentariu..."
                            className={"comment-input"}
                        />
                        <MdSend className={"send-icon"}/>
                    </div>
                    <div className={"content-type-circle laboratoare-align"}>
                        <MdLaptop className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.LABORATOARE}</div>
                    </div>
                    <div className={"content-type-circle seminarii-align"}>
                        <MdFolderOpen className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.SEMINARII}</div>
                    </div>
                    <div className={"content-type-circle cursuri-align"}>
                        <MdDesktopMac className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.COURSES}</div>
                    </div>
                </div>
                <RightMenuComponent role={"student"}/>
                <LeftMenuComponent/>

            </div>
        );
    }
}

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.black,
        color: "rgba(255, 233, 36, 0.69) ",
        boxShadow: theme.shadows[1],
        fontSize: 20
    }
}))(Tooltip);
