import React, {Component} from "react";
import {CoursesViewer} from "../courses-viewer/CoursesViewer";

export interface TeacherLaboratoriesViewerProperties {
    match: any;
}

export interface TeacherLaboratoriesViewerState {
}

export class TeacherLaboratoriesViewer extends Component<TeacherLaboratoriesViewerProperties, TeacherLaboratoriesViewerState> {

    constructor(props: TeacherLaboratoriesViewerProperties) {
        super(props);
    }

    render() {
        return (
            <CoursesViewer courseId={this.props.match.params.courseId} role={"teacher"} type={"laboratories"}/>
        );
    }
}
