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
import Comment from "../../interfaces/comment";
import {commentService} from "../../services/CommentService";
import {Page} from "../../interfaces/page";
import {courses} from "../../paths";
import {courseService} from "../../services/CourseService";
import Course from "../../interfaces/course";
import {attachmentService} from "../../services/AttachmentService";

export interface CoursesViewerProperties {
    courseId: number; //subjectId
    role: string;
    type: string;
}

export interface CoursesViewerState {
    subject?: Subject,
    attachments: Attachment[],
    courses: Course[],
    attachmentId: number,
    pdfVisible: boolean,
    type: string;
    attachment: any;
    courseId: number;
}

export class CoursesViewer extends Component<CoursesViewerProperties, CoursesViewerState> {

    private loading = false;

    constructor(props: CoursesViewerProperties) {
        super(props);
        this.state = {
            type: this.props.type,
            attachments: [],
            courses: [],
            pdfVisible: false,
            attachmentId: 0,
            attachment: null,
            courseId: 0,
        }
    }

    componentDidMount(): void {
        subjectService.getSubject(this.props.courseId).then(subject => {
            this.setState({
                subject
            });
        });

        courseService.getCoursesByTypeSubject(this.mapType(), this.props.courseId).then((page: Page<Course>) => {
            this.setState({
                courses: page.content
            });
        });
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
                        {this.renderButtons().map(index => {
                            return (<Button key={index} className={"course-button"}
                                            onClick={() => {
                                                if (index < this.state.courses.length && this.state.courses[index].attachmentId !== 0) {
                                                    this.openPDF(this.state.courses[index].attachmentId);
                                                }
                                            }}>{index + 1}</Button>)
                        })}
                    </ButtonGroup>
                    <PDFViewer visible={this.state.pdfVisible} document={this.state.attachment}/>;
                </div>
                <RightMenuComponent role={this.props.role}/>
                <LeftMenuComponent role={this.props.role}/>
                <RightMenuCourses role={this.props.role} courseId={this.props.courseId}/>
            </div>
        );
    }

    private openPDF(attachmentId: number) {

        attachmentService.getAttachmentById(attachmentId).then((data: any) => {
            this.setState({
                pdfVisible: true,
                attachmentId,
                attachment: data
            });
        });


    }

    private mapType() {
        switch (this.props.type) {
            case "courses":
                return "Curs";
            case "seminaries":
                return "Seminar";
            default:
                return "Laborator"
        }
    }

    private renderTitle() {
        let customTitle;
        const messages = i18NService.getBundle();
        if (this.props.type == "courses") {
            customTitle = <div className={"right-desktop-icon-teacher"}>
                <MdDesktopMac className={"desktop-icon"}/>
                <div>{messages.COURSES}</div>
            </div>;
        } else if (this.props.type == "seminaries")
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
                <div className={"right1"}> Încărcare:<AttachmentDrop type={this.mapType()} courseId={this.props.courseId}/></div>
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

    private renderButtons(): number[] {
        let buttons = [];
        for (let i = 0; i < 14; i++) {
            buttons.push(i);
        }
        return buttons;
    }
}


