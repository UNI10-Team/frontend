import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import './CoursesViewer.css'
import bundle from '../../util/nls';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Attachment from "../../interfaces/attachment";
import Course from "../../interfaces/course";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import history from "../../history";

export interface CoursesViewerProperties {
    match: any;
}

export interface CoursesViewerState {
    course?: Course,
    attachments: Attachment[]
}

export class CoursesViewer extends Component<CoursesViewerProperties, CoursesViewerState> {

    constructor(props: CoursesViewerProperties) {
        super(props);
        this.state = {
            attachments: []
        }
    }

    render() {
        const messages = bundle.messages;
        const {attachments = []} = this.state;
        return (
            <div className={"courses-viewer-component"}>
                <div className={"side-rectangle"}>
                    <div className={"side-text"}>{this.props.match.params.courseId}</div>
                </div>
                {/*<div className={"course-logo"}/>*/}
                <div className={"grey-rectangle-courses"}>
                    <div className={"left"}>
                        <Button> <ArrowBackIosIcon className={"left-icon"} onClick={()=>history.goBack()}/> </Button>
                    </div>
                    <div className={"right"}>
                        <DesktopMacIcon className={"desktop-icon"}/>
                        <div>{messages.COURSES}</div>
                    </div>
                    <ButtonGroup className={"button-group"} >
                        {/*DO NOT DELETE!!!!!*/}
                        {/*{attachments.map((att: Attachment) =>*/}
                        {/*<Button>`#${att.id}`</Button>)}*/}

                        <Button className={"course-button"} >#1</Button>
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
                        <Button className={"course-button"}> #12</Button>
                        <Button className={"course-button"}>#13</Button>
                        <Button className={"course-button"}>#14</Button>


                    </ButtonGroup>

                </div>
                <RightMenuComponent role={"student"}/>
                <LeftMenuComponent/>
            </div>
        );
    }
}


