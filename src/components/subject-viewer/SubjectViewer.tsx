import React, {Component} from "react";
import "./SubjectViewer.css";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {MdDesktopMac, MdFolderOpen, MdLaptop, MdModeComment, MdSend} from "react-icons/md";
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
import {noticeService} from "../../services/NoticeService";
import Notice from "../../interfaces/notice";


export interface SubjectViewerProperties {
    subjectId: number;
    role: string;
}

export interface SubjectViewerState {
    comments: Comment[];
    commentsToAccept: Comment[];
    notices: Notice[];
    last: boolean;
    subject: Subject;
    comment: string;
    page: number;
    notice: string;
    lastN: boolean;
    pageN: number;
}

export class SubjectViewer extends Component<SubjectViewerProperties, SubjectViewerState> {

    private loading = false;
    private loadingNotices = false;

    constructor(props: SubjectViewerProperties) {
        super(props);
        this.state = {
            comments: [],
            commentsToAccept: [],
            notices: [],
            last: false,
            subject: {
                id: this.props.subjectId,
                name: '',
                teacherId: 0,
                year: 0
            },
            page: 0,
            comment: '',
            notice: '',
            lastN: false,
            pageN: 0
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

    private loadNotices() {
        this.loadingNotices = true;
        noticeService.getNoticesForSubject(this.props.subjectId).then((page: Page<Notice>) => {
            this.loadingNotices = false;
            this.setState({
                notices: page.content,
                lastN: page.last
            })
        })
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
                commentsToAccept: page.content.filter(comment => {if (!comment.accepted) return comment; else return null;}),
                last: page.last
            })
        });
        this.loadNotices();
    }

    render() {
        const messages = i18NService.getBundle();
        let {comments, commentsToAccept, notices, subject} = this.state;
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
                            <List className={"scrollable-list news-list"} onScroll={() => this.onScrollNotices()}>
                                {notices.map((notice) => this.renderNotice(notice))}
                            </List>
                        </div>
                        {this.renderAddNews(isTeacher)}
                    </div>
                    <div className={"comments-rectangle"}>
                        <div className={"rectangle-text"}>{messages.COMMENTS}</div>
                        <div className={"comments-inside-rectangle"}>
                            <List className={"scrollable-list " + this.getListClass()} onScroll={() => this.onScroll()}>
                                {comments.map((comment) => this.renderComment(comment))}
                            </List>
                            {this.renderCommentsToAcceptList(commentsToAccept, isTeacher)}
                        </div>
                        <div>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                placeholder="Adauga un comentariu..."
                                value={this.state.comment}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    this.setState({
                                        comment: event.target.value
                                    })
                                }}
                                className={"comment-input"}
                            />
                            <MdSend className={"send-icon"} onClick={() => {
                                this.saveComment();
                            }}/>
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
            this.setState({
                comments: this.state.comments.concat(comment),
                comment: ''
            })
        });
    }

    private saveNotice() {
        const {notice} = this.state;
        noticeService.saveNotice({
            id: 0,
            text: notice,
            subjectId: this.props.subjectId
        }).then((notice) => {
            console.log(notice.text);
            this.setState({
                notices: this.state.notices.concat(notice),
                notice: ''
            });
        });
    }

    private acceptComment(comment: Comment) {
        comment.accepted = true;
        commentService.updateComment(comment)
            .then((comment) => {
                this.setState({
                    commentsToAccept: this.state.commentsToAccept.filter(comm => comm.id !=comment.id)
                });
            });
    }

    private declineComment(comment: Comment) {
        commentService.deleteComment(comment.id)
            .then((msg) => {
                this.setState({
                    commentsToAccept: this.state.commentsToAccept.filter(comm => comm != comment)
                })
            })
    }

    private getListClass() {
        if (this.props.role == "teacher") {
            return "short-comments-list";
        } else {
            return "long-comments-list";
        }
    }

    private renderCommentsToAcceptList(commentsToAccept: Comment[], isTeacher: boolean) {
        if (!isTeacher)
            return null;
        return (
            <List className={"scrollable-list comments-to-accept"}>
                {commentsToAccept.map((comment) => this.renderCommentToAccept(comment))}
            </List>
        );
    }


    private renderAddNews(isTeacher: boolean) {
        if (!isTeacher)
            return null;
        return (
            <div>
                <input
                    type="text"
                    id="anunt"
                    name="anunt"
                    placeholder="Adauga un anunt..."
                    value={this.state.notice}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({
                            notice: event.target.value
                        })
                    }}
                    className={"news-input"}/>
                <MdSend className={"send-icon"} onClick={() => this.saveNotice()}/>
            </div>
        )
    }

    private renderCommentToAccept(comment: Comment) {
        return (
            <ListItem key={comment.id}>
                <ListItemAvatar>
                    <Avatar>
                        <PriorityHighIcon/>
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
                <div className={"center-div"}>
                    <Button className={"accept-comment-button"} onClick={() => this.acceptComment(comment)}><CheckIcon/></Button>
                    <Button className={"decline-comment-button"}
                            onClick={() => this.declineComment(comment)}><BlockIcon/></Button>
                </div>
            </ListItem>
        );
    }

    private renderComment(comment: Comment) {
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
            </ListItem>
        )
    }

    private renderNotice(notice: Notice) {
        return (
            <ListItem key={notice.id}>
                <ListItemAvatar>
                    <Avatar>
                        <NotificationsIcon/>
                    </Avatar>
                </ListItemAvatar>
                <div className={"news-text"}>
                    <ListItemText disableTypography primary={notice.text}/>
                </div>
            </ListItem>
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

    private onScrollNotices() {
        if (!this.state.lastN && !this.loadingNotices) {
            this.loadingNotices = true;
            noticeService.getNoticesForSubject(this.props.subjectId, this.state.pageN + 1).then(page => {
                this.loadingNotices = false;
                this.setState({
                    notices: [...this.state.notices, ...page.content],
                    pageN: page.number
                });
            });
        }
    }
}

