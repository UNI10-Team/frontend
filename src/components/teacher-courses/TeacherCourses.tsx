import React, {Component} from "react";
import {Home, AccountCircle, SettingsPower} from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import './TeacherCourses.css'
import bundle from '../../util/nls';
import history from '../../history';
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";

export interface TeacherCoursesProperties {
}

export interface TeacherCoursesState {
}

export class TeacherCourses extends Component<TeacherCoursesProperties, TeacherCoursesState> {

    constructor(props: TeacherCoursesProperties) {
        super(props);
    }

    render() {
        const messages = bundle.messages;
        return (
            <div className={"teacher-courses-component"}>
                <div className={"grey-rectangle-courses"}>
                    <div className={"logo"}/>
                    <div className={"main-text-2-courses"}>
                        {messages.TAKE_A_LOOK_TO_COURSES}
                    </div>
                </div>

                <RightMenuComponent role={"teacher"}/>
                <LeftMenuComponent/>

            </div>
        );
    }
}
