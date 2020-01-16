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
import {commentService} from "../../services/CommentService";
import {Page} from "../../interfaces/page";
import Subject from "../../interfaces/subject";
import {subjectService} from "../../services/SubjectService";
import {IconButton} from "@material-ui/core";

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

export interface SubjectViewerProperties {
    subjectId: number;
    role: string;
}

export interface SubjectViewerState {
    comments: Comment[];
    last: boolean;
    subject: Subject,
    comment: string,
    page: number
}

export class SubjectViewer extends Component<SubjectViewerProperties, SubjectViewerState> {

    private loading = false;

    constructor(props: SubjectViewerProperties) {
        super(props);
        this.state = {
            comments: [],
            last: false,
            subject: {
                id: this.props.subjectId,
                name: '',
                teacherId: 0,
                year: 0
            },
            page: 0,
            comment: ''
        }
    }

    componentDidMount(): void {
        this.loadData();
    }

    componentDidUpdate(prevProps: Readonly<SubjectViewerProperties>, prevState: Readonly<SubjectViewerState>, snapshot?: any): void {
        if (prevProps.subjectId !== this.props.subjectId) {
            this.loadData();
        }
    }

    private loadData() {
        subjectService.getSubject(this.props.subjectId).then(subject => {
            this.setState({
                subject
            })
        });

        this.loading = true;
        commentService.getCommentsForSubject(this.props.subjectId).then((page: Page<Comment>) => {
            this.loading = false;
            this.setState({
                comments: page.content,
                last: page.last
            })
        });
    }

    render() {
        const messages = i18NService.getBundle();
        const {comments, subject} = this.state;
        const {role} = this.props;

        const isTeacher = role === 'teacher';

        return (
            <div className={"course-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>{subject.name}</div>
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
                        {this.renderAddNews()}
                    </div>
                    <div className={"comments-rectangle"}>
                        <div className={"rectangle-text"}>{messages.COMMENTS}</div>
                        <div className={"comments-inside-rectangle"}>
                            <List className={"scrollable-list " + this.getListClass()} onScroll={() => this.onScroll()}>
                                {comments.map((comment) => this.renderComment(comment, isTeacher))}
                            </List>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                placeholder="Adauga un comentariu..."
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    this.setState({
                                        comment: event.target.value
                                    })
                                }}
                                className={"comment-input"}
                            />
                            <IconButton aria-label="send" onClick={() => {
                                this.saveComment();
                            }}>
                                <MdSend className={"send-icon"}/>
                            </IconButton>
                        </div>
                    </div>
                    <div className={"content-type-circle laboratoare-align"}
                         onClick={() => history.push(`/${role}/labs/${subject.id}/viewer`)}>
                        <MdLaptop className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.LABORATORIES}</div>
                    </div>
                    <div className={"content-type-circle seminarii-align"}
                         onClick={() => history.push(`/${role}/seminaries/${subject.id}/viewer`)}>
                        <MdFolderOpen className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.SEMINARIES}</div>
                    </div>
                    <div className={"content-type-circle cursuri-align"}
                         onClick={() => history.push(`/${role}/courses/${subject.id}/viewer`)}>
                        <MdDesktopMac className={"content-type-icon"}/>
                        <div className={"content-type-text"}>{messages.COURSES}</div>
                    </div>
                </div>
                <RightMenuComponent role={role}/>
                <LeftMenuComponent role={role}/>
            </div>
        );
    }

    private saveComment() {
        const {comment} = this.state;
        commentService.saveComment({
            id: 0,
            text: comment,
            subjectId: this.props.subjectId
        }).then((comment) => {
            console.log(comment.text);
        });
    }

    private getListClass() {
        if (this.props.role == "teacher") {
            return "short-comments-list";
        } else {
            return "long-comments-list";
        }
    }

    private renderAddNews() {
        return (
            <div>
                <input
                    type="text"
                    id="anunt"
                    name="anunt"
                    placeholder="Adauga un anunt..."
                    className={"news-input"}/>
                <MdSend className={"send-icon"}/>
            </div>
        )
    }

    private renderComment(comment: Comment, isTeacher: boolean) {
        return (
            <ListItem key={comment.id}>
                <ListItemAvatar>
                    <Avatar>
                        {comment.accepted ? <MdModeComment/> : <PriorityHighIcon/>}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={comment.username}
                    secondary={comment.text}
                    secondaryTypographyProps={{
                        style: {color: "white"}
                    }}
                    primaryTypographyProps={{
                        style: {color: "white", fontWeight: "bold"}
                    }}
                />
                {this.renderAcceptDeclineButtons(comment, isTeacher)}
            </ListItem>
        )
    }

    private renderAcceptDeclineButtons(comment: Comment, isTeacher: boolean) {
        if (comment.accepted) {
            return null;
        } else if (!isTeacher) {
            return null;
        } else return (
            <div className={"center-div"}>
                <Button className={"accept-comment-button"}><CheckIcon/></Button>
                <Button className={"decline-comment-button"}><BlockIcon/></Button>
            </div>
        )
    }


    private onScroll() {
        if (!this.state.last && !this.loading) {
            this.loading = true;
            commentService.getCommentsForSubject(this.props.subjectId, this.state.page + 1).then(page => {
                this.loading = false;
                this.setState({
                    comments: [...this.state.comments, ...page.content],
                    page: page.number
                });
            });
        }

    }
}

