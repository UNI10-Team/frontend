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

export interface CoursesViewerProperties {
    courseId: number;
    role: string;
    type: string;
}

export interface CoursesViewerState {
    subject?: Subject,
    attachments: Attachment[]
}

export class CoursesViewer extends Component<CoursesViewerProperties, CoursesViewerState> {

    constructor(props: CoursesViewerProperties) {
        super(props);
        this.state = {
            attachments: []
        }
    }

    componentDidMount(): void {
        subjectService.getSubject(this.props.courseId).then(subject => {
            this.setState({
                subject
            });
        })
    }

    render() {
        const messages = i18NService.getBundle();
        let header, customTitle;
        const {subject} = this.state;
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

        if (this.props.role == "teacher") {
            header = <div>
                <div className={"left-back-button-teacher"}>
                    <Button> <ArrowBackIosIcon className={"left-icon"} onClick={() => history.goBack()}/> </Button>
                </div>
                {customTitle}
                <div className={"right1"}> Încărcare:<AttachmentDrop/></div>
            </div>
        } else
            header = <div>
                <div className={"left-back-button"}>
                    <Button> <ArrowBackIosIcon className={"left-icon"} onClick={() => history.goBack()}/> </Button>
                </div>
                {customTitle}
            </div>;
        return (
            <div className={"courses-viewer-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>{subject ? subject.name : ''}</div>
                </div>
                <div className={"grey-rectangle-courses"}>
                    {header}
                    <ButtonGroup className={"button-group"}>
                        <Button className={"course-button"}>#1</Button>
                        <Button className={"course-button"}>#2</Button>
                        <Button className={"course-button"}>#3</Button>
                        <Button className={"course-button"}>#4</Button>
                        <Button className={"course-button"}>#5</Button>
                        <Button className={"course-button"}>#6</Button>
                        <Button className={"course-button"}>#7</Button>
                        <Button className={"course-button"}>#8</Button>
                        <Button className={"course-button"}>#9</Button>
                        <Button className={"course-button"}>#10</Button>
                        <Button className={"course-button"}>#11</Button>
                        <Button className={"course-button"}>#12</Button>
                        <Button className={"course-button"}>#13</Button>
                        <Button className={"course-button"}>#14</Button>
                    </ButtonGroup>

                </div>
                <RightMenuComponent role={this.props.role}/>
                <LeftMenuComponent role={this.props.role}/>
            </div>
        );
    }
}


