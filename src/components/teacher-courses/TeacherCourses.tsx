import React, {Component} from "react";
import './TeacherCourses.css'
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {i18NService} from "../../services/I18NService";

export interface TeacherCoursesProperties {
}

export interface TeacherCoursesState {
}

export class TeacherCourses extends Component<TeacherCoursesProperties, TeacherCoursesState> {

    render() {
        const messages = i18NService.getBundle();
        return (
            <div className={"teacher-courses-component"}>
                <div className={"grey-rectangle-courses"}>
                    <div className={"logo"}/>
                    <div className={"main-text-2-courses"}>
                        {messages.YOU_CAN_UPLOAD_FILES}
                    </div>
                </div>

                <RightMenuComponent role={"teacher"}/>
                <LeftMenuComponent role={"teacher"}/>

            </div>
        );
    }
}
