import Course from "../../interfaces/course";
import Attachment from "../../interfaces/attachment";
import React, {Component} from "react";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface TeacherSeminariesViewerProperties {
    match: any;
}

export interface TeacherSeminariesViewerState {
}

export class TeacherSeminariesViewer extends Component<TeacherSeminariesViewerProperties, TeacherSeminariesViewerState> {

    constructor(props: TeacherSeminariesViewerProperties) {
        super(props);
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"teacher"} type={"seminaries"}/>
        );
    }
}
