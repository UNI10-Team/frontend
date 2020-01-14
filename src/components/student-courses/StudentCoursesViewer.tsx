import Course from "../../interfaces/course";
import Attachment from "../../interfaces/attachment";
import React, {Component} from "react";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface StudentCoursesViewerProperties {
    match: any;
}

export interface StudentCoursesViewerState {
}

export class StudentCoursesViewer extends Component<StudentCoursesViewerProperties, StudentCoursesViewerState> {

    constructor(props: StudentCoursesViewerProperties) {
        super(props);
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"student"} type={"courses"}/>
        );
    }
}
