import React, {Component} from "react";
import {SubjectViewer} from "../subject-viewer/SubjectViewer";

export interface StudentCourseProperties {
    match: any;
}

export interface StudentCourseState {
}

export class StudentCourse extends Component<StudentCourseProperties, StudentCourseState> {
    constructor(props: StudentCourseProperties) {
        super(props);
    }

    render() {
        return (
            <SubjectViewer subjectId={this.props.match.params.courseId} role={"student"}/>
        );
    }
}

