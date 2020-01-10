import React, {Component} from "react";
import {Filter1, Filter2, Filter3, Filter4, Home, AccountCircle, SettingsPower} from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import './StudentCourses.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bundle from '../../util/nls';
import history from "../../history";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";

export interface StudentCoursesProperties {
}

export interface StudentCoursesState {
}

export class StudentCourses extends Component<StudentCoursesProperties, StudentCoursesState> {

    constructor(props: StudentCoursesProperties) {
        super(props);
    }
        
    render() {
        const messages = bundle.messages;
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

