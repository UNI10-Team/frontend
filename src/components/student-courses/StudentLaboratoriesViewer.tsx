import React, {Component} from "react";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface StudentLaboratoriesViewerProperties {
    match: any;
}

export interface StudentLaboratoriesViewerState {
}

export class StudentLaboratoriesViewer extends Component<StudentLaboratoriesViewerProperties, StudentLaboratoriesViewerState> {

    constructor(props: StudentLaboratoriesViewerProperties) {
        super(props);
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"student"} type={"laboratories"}/>
        );
    }
}
