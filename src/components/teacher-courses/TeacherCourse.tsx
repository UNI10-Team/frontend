import React, {Component} from "react";
import {SubjectViewer} from "../subject-viewer/SubjectViewer";

export interface TeacherCourseProperties {
    match: any;
}

export interface TeacherCourseState {
}

export class TeacherCourse extends Component<TeacherCourseProperties, TeacherCourseState> {
    constructor(props: TeacherCourseProperties) {
        super(props);
    }

    render() {
        return (
            <SubjectViewer subjectId={this.props.match.params.courseId} role={"teacher"}/>
        );
    }
}
