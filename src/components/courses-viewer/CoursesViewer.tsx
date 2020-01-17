import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import './CoursesViewer.css'
import {
    MdDesktopMac,
    MdFolderOpen,
    MdLaptop,
} from "react-icons/md";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Attachment from "../../interfaces/attachment";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import history from "../../history";
import {AttachmentDrop} from "../attachment-drop/attachmentDrop";
import {i18NService} from "../../services/I18NService";
import Subject from "../../interfaces/subject";
import {subjectService} from "../../services/SubjectService";
import {RightMenuCourses} from "../right-menu-courses/RightMenuCourses";
import PDFViewer from "./PDFViewer";
import {SubjectViewerProperties, SubjectViewerState} from "../subject-viewer/SubjectViewer";
import Comment from "../../interfaces/comment";
import Notice from "../../interfaces/notice";
import {commentService} from "../../services/CommentService";
import {Page} from "../../interfaces/page";

export interface CoursesViewerProperties {
    courseId: number;
    role: string;
    type: string;
}

export interface CoursesViewerState {
    subject?: Subject,
    attachments: Attachment[],
    attachmentId: number,
    pdfVisible: boolean,
    comments: Comment[];
    last: boolean;
    page: number;
}

export class CoursesViewer extends Component<CoursesViewerProperties, CoursesViewerState> {

    private loading = false;

    constructor(props: CoursesViewerProperties) {
        super(props);
        this.state = {
            attachments: [],
            pdfVisible: false,
            attachmentId: 0,
            comments: [],
            page: 0,
            last: false
        }
    }

    componentDidMount(): void {
        subjectService.getSubject(this.props.courseId).then(subject => {
            this.setState({
                subject
            });
        });

        // this.loadComments();
    }

    componentDidUpdate(prevProps: Readonly<CoursesViewerProperties>, prevState: Readonly<CoursesViewerState>, snapshot?: any): void {
        if (prevState.attachmentId != this.state.attachmentId) {
            // this.loadComments();
        }
    }

    render() {
        const {subject} = this.state;
        return (
            <div className={"courses-viewer-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>{subject ? subject.name : ''}</div>
                </div>
                <div className={"grey-rectangle-courses"}>
                    {this.renderHeader()}
                    <ButtonGroup className={"button-group"}>
                        {this.renderButtons().map(buttonName => {
                            return (<Button key={buttonName} className={"course-button"}
                                            onClick={() => this.openPDF(buttonName)}>{buttonName}</Button>)
                        })}
                    </ButtonGroup>
                    <PDFViewer visible={this.state.pdfVisible}/>;
                </div>
                <RightMenuComponent role={this.props.role}/>
                <LeftMenuComponent role={this.props.role}/>
                <RightMenuCourses role={this.props.role} courseId={this.props.courseId}/>
            </div>
        );
    }

    private openPDF(attachment: string) {
        const attachmentId = attachment.toString().slice(1, attachment.toString().length);
        this.setState({
            pdfVisible: true,
            attachmentId: +attachmentId
        });
    }

    private renderTitle() {
        let customTitle;
        const messages = i18NService.getBundle();
        if (this.props.type == "courses")
            customTitle = <div className={"right-desktop-icon-teacher"}>
                <MdDesktopMac className={"desktop-icon"}/>
                <div>{messages.COURSES}</div>
            </div>;
        else if (this.props.type == "seminaries")
            customTitle = <div className={"right-desktop-icon-teacher"}>
                <MdFolderOpen className={"desktop-icon"}/>
                <div>{messages.SEMINARIES}</div>
            </div>;
        else
            customTitle = <div className={"right-desktop-icon-teacher"}>
                <MdLaptop className={"desktop-icon"}/>
                <div>{messages.LABORATORIES}</div>
            </div>;

        return customTitle;
    }

    private renderHeader() {
        let header;
        if (this.props.role == "teacher" && this.state.attachmentId !== 0) {
            header = <div>
                <div className={"left-back-button-teacher"}>
                    <Button> <ArrowBackIosIcon className={"left-icon"} onClick={() => history.goBack()}/> </Button>
                </div>
                {this.renderTitle()}
                <div className={"right1"}> Încărcare:<AttachmentDrop/></div>
            </div>
        } else
            header = <div>
                <div className={"left-back-button"}>
                    <Button> <ArrowBackIosIcon className={"left-icon"} onClick={() => history.goBack()}/> </Button>
                </div>
                {this.renderTitle()}
            </div>;

        return header;
    }

    private renderButtons() {
        let buttons = [];
        for (let i = 1; i < 15; i++) {
            const buttonName = "#" + i;
            buttons.push(buttonName);
        }
        return buttons;
    }

    private loadComments() {
        this.loading = true;
        commentService.getCommentsForSubjectAttachment(this.state.attachmentId, this.props.courseId).then((page: Page<Comment>) => {
            this.loading = false;
            this.setState({
                comments: page.content,
                last: page.last
            })
        });
    }
}


