import React, {Component} from "react";
import bundle from '../../util/nls';
import Attachment from "../../interfaces/attachment";
import Course from "../../interfaces/course";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface TeacherCoursesViewerProperties {
    match: any;
}

export interface TeacherCoursesViewerState {
    course?: Course,
    attachments: Attachment[]
}

export class TeacherCoursesViewer extends Component<TeacherCoursesViewerProperties, TeacherCoursesViewerState> {

    constructor(props: TeacherCoursesViewerProperties) {
        super(props);
        this.state = {
            attachments: []
        }
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"teacher"} type={"courses"}/>
        );
    }
}


