import React, {Component} from "react";
import './StudentCourses.css'
import bundle from '../../util/nls';
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {i18NService} from "../../services/I18NService";

export interface StudentCoursesProperties {
}

export interface StudentCoursesState {
}

export class StudentCourses extends Component<StudentCoursesProperties, StudentCoursesState> {

    constructor(props: StudentCoursesProperties) {
        super(props);
    }

    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"student-courses-component"}>
                <div className={"grey-rectangle-courses"}>
                    <div className={"logo"}/>
                    <div className={"main-text-1-courses"}>
                        {messages.WHAT_WILL_YOU_STUDY_TODAY}
                    </div>
                    <div className={"main-text-2-courses"}>
                        {messages.TAKE_A_LOOK_TO_COURSES}
                    </div>
                </div>
                <RightMenuComponent role={"student"}/>
                <LeftMenuComponent/>
            </div>
        );
    }
}

