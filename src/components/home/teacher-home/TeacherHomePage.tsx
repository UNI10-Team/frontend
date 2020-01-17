import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {AccountCircle, SettingsPower} from "@material-ui/icons";
import './TeacherHomePage.css'
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
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import history from "../../../history";
import {i18NService} from "../../../services/I18NService";
import {userService} from '../../../services/UserService';
import {subjectService} from '../../../services/SubjectService';
import {commentService} from '../../../services/CommentService';
import User from '../../../interfaces/user';
import Subject from '../../../interfaces/subject';
import Comment from '../../../interfaces/comment';
import {Page} from "../../../interfaces/page";
import {Role} from '../../../interfaces/role';
import {restService} from "../../../services/RestService";

export interface HomeProperties {
}

export interface HomeState {
    currentUser: User;
    subjects: Subject[];
    last: boolean;
    comments: Comment[],
    lastC: boolean
}

export class TeacherHomePage extends Component<HomeProperties, HomeState> {
    constructor(props: HomeProperties) {
        super(props);
        const userNull: User = {
            email: "",
            firstName: "",
            id: 1,
            lastName: "",
            role: Role.ROLE_COURSE_TEACHER,
            username: "",
        };
        this.state = {
            currentUser: userNull,
            last: false,
            subjects: [],
            comments: [],
            lastC: false
        };

    }


    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"home-page"}>
                <div className={"welcome-text-home"}>
                    {`${messages.WELCOME}, prof. ${this.state.currentUser.firstName}!`}
                </div>
                <div>

                    <div className={"notifications"}>
                        <React.Fragment>
                            <CssBaseline/>
                            <Paper square>
                                <Typography className={"main-text-home"}>
                                    {messages.NEWS}
                                </Typography>
                                <List className={"scrollable-list"}>
                                    {this.state.comments.map((comment) => (
                                        <React.Fragment key={comment.id}>
                                            <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar><NotificationsIcon/></Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={`${comment.username} @${this.getSubjectName1(this.state.subjects.filter((subject) => subject.id == comment.subjectId)[0].name)}`}
                                                    secondary={comment.text}/>
                                                <Button className={"accept-button"}
                                                        onClick={() => this.acceptComment(comment)}>Accepta<CheckIcon/></Button>
                                                <Button className={"decline-button"}
                                                        onClick={() => this.declineComment(comment)}>Refuza<CloseIcon/></Button>
                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </React.Fragment>
                    </div>
                    <Button className={"big-button"} onClick={() => history.push('/teacher/profile')}>
                        <AccountCircleIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.PROFILE}</div>
                    </Button>
                    <Button className={"big-button"} onClick={() => history.push('/teacher/courses')}>
                        <FileCopyIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.COURSES}</div>
                    </Button>
                    <Button className={"big-button"}>
                        <ViewComfyIcon className={"big-icon"}/>
                        <div className={"text-button"}>{messages.TIMETABLE}</div>
                    </Button>
                </div>


                <Button className={"button-turnoff-home"}
                        onClick={() => {
                            restService.removeJWT();
                            history.push('/');
                        }}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-profile-home"} onClick={() => history.push('/teacher/profile')}>
                    <AccountCircle className={"white-icon"}/>
                </Button>
            </div>
        );
    }

    componentDidMount(): void {
        userService.getCurrentUser().then((response: User) => {
            this.setState({currentUser: response});
            subjectService.getSubjectsByTeacher(this.state.currentUser.id).then((page: Page<Subject>) => {
                this.setState({
                    subjects: page.content,
                    last: page.last
                });
                for (let subject of this.state.subjects) {
                    commentService.getCommentsForSubject(subject.id).then((page: Page<Comment>) => {
                        this.setState({
                            comments: this.state.comments.concat(page.content.filter(comm => !comm.accepted)),
                            lastC: page.last
                        });
                    });
                }
            });
        });
    }

    private getSubjectName1(initial: string): string {
        const words = initial.split(' ');
        let finalName = '';
        for (let word of words) {
            finalName += word.charAt(0);
        }
        return finalName.toUpperCase();
    }

    private acceptComment(comment: Comment) {
        comment.accepted = true;
        commentService.updateComment(comment)
            .then((comment) => {
                console.log(comment);
                this.setState({
                    comments: this.state.comments.filter(comm => comm.id != comment.id)
                });
            });
    }

    private declineComment(comment: Comment) {
        commentService.deleteComment(comment.id)
            .then((msg) => {
                this.setState({
                    comments: this.state.comments.filter(comm => comm != comment)
                })
            })
    }
}
