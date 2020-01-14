import Course from "../../interfaces/course";
import Attachment from "../../interfaces/attachment";
import React, {Component} from "react";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface StudentSeminariesViewerProperties {
    match: any;
}

export interface StudentSeminariesViewerState {
}

export class StudentSeminariesViewer extends Component<StudentSeminariesViewerProperties, StudentSeminariesViewerState> {

    constructor(props: StudentSeminariesViewerProperties) {
        super(props);
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"student"} type={"seminaries"}/>
        );
    }
}
