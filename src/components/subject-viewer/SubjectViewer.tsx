import React, {Component} from "react";
import "./SubjectViewer.css";
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
import history from "../../history";
import {i18NService} from "../../services/I18NService";
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Comment from '../../interfaces/comment'

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
        user: "Valentina",
        text: "Iubesc proiectul colectiv"
    },
    {
        id: 2,
        user: "Amalia",
        text: "Iubesc si eu proiectul colectiv"
    }
];

const newComments = [
    {
        id: 1,
        primary: "Silviu",
        secondary: "Pot sa iubesc si eu proiectul colectiv?"
    }
];

export interface SubjectViewerProperties {
    courseId: string;
    role: string;
}

export interface SubjectViewerState {
    comments: Comment[];
}

export class SubjectViewer extends Component<SubjectViewerProperties, SubjectViewerState> {
    constructor(props: SubjectViewerProperties) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount(): void {
        // this.setState({
        //     comments: [{id: 1, text: "Imi place acest curs", userId: 2, attachmentId: 2}]
        // });
    }

    render() {
        const messages = i18NService.getBundle();
        // const {comments} = this.state;
        const currentSubject = this.props.courseId;
        const currentRole = this.props.role;
        let addNews, newCommentsList;
        let commentsListClass: string = "";
        const customVars = this.initCustomVars(commentsListClass, addNews, newCommentsList);
        commentsListClass = customVars.commentsListClass;
        addNews = customVars.addNews;
        newCommentsList = customVars.newCommentsList;

        return (
            <div className={"course-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>{currentSubject}</div>
                </div>
                <div className={"grey-rectangle"}>
                    <div className={"news-rectangle"}>
                        <div className={"rectangle-text"}>{messages.WHATS_NEW}</div>
                        <div className={"news-inside-rectangle"}>
                            <List className={"scrollable-list news-list"}>
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
                        {addNews}
                    </div>
                    <div className={"comments-rectangle"}>
                        <div className={"rectangle-text"}>{messages.COMMENTS}</div>
                        <div className={"comments-inside-rectangle"}>
                            <List className={"scrollable-list " + commentsListClass}>
                                {comments.map(({id, user, text}) => (
                                    <React.Fragment key={id}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <MdModeComment/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <div>
                                                <ListItemText
                                                    primary={user}
                                                    secondary={text}
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
                            {newCommentsList}
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
                    <div className={"content-type-circle laboratoare-align"}
                         onClick={() => history.push(`/${currentRole}/labs/${currentSubject}/viewer`)}>
                        <MdLaptop className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.LABORATORIES}</div>
                    </div>
                    <div className={"content-type-circle seminarii-align"}
                         onClick={() => history.push(`/${currentRole}/seminaries/${currentSubject}/viewer`)}>
                        <MdFolderOpen className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.SEMINARIES}</div>
                    </div>
                    <div className={"content-type-circle cursuri-align"}
                         onClick={() => history.push(`/${currentRole}/courses/${currentSubject}/viewer`)}>
                        <MdDesktopMac className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.COURSES}</div>
                    </div>
                </div>
                <RightMenuComponent role={this.props.role}/>
                <LeftMenuComponent role={this.props.role}/>

            </div>
        );
    }

    private initCustomVars(commentsListClass: string, addNews: any, newCommentsList: any) {
        if (this.props.role == "teacher") {
            commentsListClass = "short-comments-list";
            addNews = <div><input
                type="text"
                id="anunt"
                name="anunt"
                placeholder="Adauga un anunt..."
                className={"news-input"}/>
                <MdSend className={"send-icon"}/></div>;
            newCommentsList = <List className={"scrollable-list comments-to-accept"}>
                {newComments.map(({id, primary, secondary}) => (
                    <React.Fragment key={id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PriorityHighIcon/>
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
                                <div className={"center-div"}>
                                    <Button className={"accept-comment-button"}><CheckIcon/></Button>
                                    <Button className={"decline-comment-button"}><BlockIcon/></Button>
                                </div>
                            </div>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        } else
            commentsListClass = "long-comments-list";
        return {commentsListClass, addNews, newCommentsList};
    }
}

