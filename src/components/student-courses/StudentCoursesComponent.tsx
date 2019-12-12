import React, {Component} from "react";
import {Filter1, Filter2, Filter3, Filter4, Home, AccountCircle, SettingsPower} from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import './StudentCourses.css';
import bundle from "../../interfaces/messages";

export interface StudentCoursesProperties {

}


export interface StudentCoursesState {
}

export class StudentCoursesComponent extends Component<StudentCoursesProperties, StudentCoursesState> {

    render() {
        const messages = bundle.messages;
        return (
            <div className={"student-courses-component"}>
                <div className={"grey-rectangle"}>
                    <div className={"logo"}/>
                    <div className={"main-text-1"}>
                        {messages.WHAT_WILL_YOU_STUDY_TODAY}
                    </div>
                    <div className={"main-text-2"}>
                        {messages.LOOK_AT_YOUR_SUBJECTS}
                    </div>
                </div>
                <LightTooltip title={messages.THE_YEAR + ' 1'} placement={"right"}>
                    <Button className={"button-1"}>
                        <Filter1 className={"icon"}/>
                    </Button>
                </LightTooltip>
                <LightTooltip title={messages.THE_YEAR + ' 2'} placement={"right"}>
                    <Button className={"button-2"}>
                        <Filter2 className={"icon"}/>
                    </Button>
                </LightTooltip>
                <LightTooltip title={messages.THE_YEAR + ' 3'} placement={"right"}>
                    <Button className={"button-3"}>
                        <Filter3 className={"icon"}/>
                    </Button>
                </LightTooltip>
                <LightTooltip title={messages.THE_YEAR + ' 4'} placement={"right"}>
                    <Button className={"button-4"}>
                        <Filter4 className={"icon"}/>
                    </Button>
                </LightTooltip>
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"icon"}/>
                </Button>
                <Button className={"button-profile"}>
                    <AccountCircle className={"icon"}/>
                </Button>
                <Button className={"button-home"}>
                    <Home className={"icon"}/>
                </Button>
            </div>
        );
    }

}

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.black,
        color: 'rgba(255, 233, 36, 0.69) ',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);
