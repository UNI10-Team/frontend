import React, {Component} from "react";
import './CommentComponent.css'
import {i18NService} from "../../services/I18NService";
import Comment from "../../interfaces/comment";
import Notice from "../../interfaces/notice";
import Subject from "../../interfaces/subject";
import {subjectService} from "../../services/SubjectService";
import {commentService} from "../../services/CommentService";
import {Page} from "../../interfaces/page";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {MdModeComment} from "react-icons/md";
import PriorityHighIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";

export interface CommentsComponentStudentProperties {
    subjectId: number;
}


export interface CommentsComponentStudentState {
    comments: Comment[];
    last: boolean;
    page: number;
}

export class CommentsComponent extends Component<CommentsComponentStudentProperties, CommentsComponentStudentState> {

    private loading = false;
    constructor(props: CommentsComponentStudentProperties) {
        super(props);
        this.state = {
            comments: [],
            last: false,
            page: 0
        }
    }
    componentDidMount(): void {
        this.loadData();
    }

    private loadData() {
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
        const messages=i18NService.getBundle();
        let {comments} = this.state;
        return (
            <div className={"grey-rectangle-comments"}>
                <label className={"comment"}>{messages.COMMENTS}</label>
                <List className={"scrollable-list comments-list"} onScroll={() => this.onScroll()}>
                    {comments.map((comment) => this.renderComment(comment))}
                </List>
            </div>
        );
    }

    private renderComment(comment: Comment) {
        return (
            <ListItem key={comment.id}>
                <ListItemAvatar>
                    <Avatar>
                        <MdModeComment/>
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
