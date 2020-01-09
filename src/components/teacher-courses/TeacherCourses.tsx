import React, {Component} from "react";
import {Filter1, Filter2, Filter3, Filter4, Home, AccountCircle, SettingsPower} from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import './TeacherCourses.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bundle from '../../util/nls';


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
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-profile"}>
                    <AccountCircle className={"white-icon"}/>
                </Button>
                <Button className={"button-home"}>
                    <Home className={"white-icon"}/>
                </Button>
                <LightTooltip title={`${messages.YEAR} 1`} placement={"right"} >
                    <ExpansionPanel className={"panel-1"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} >
                            <Filter1 className={"white-icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                FP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                ASC
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
                <LightTooltip title={`${messages.YEAR} 2`} placement={"right"}>
                    <ExpansionPanel className={"panel"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter2 className={"white-icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                MPP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                MAP
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
                <LightTooltip title={`${messages.YEAR} 3`} placement={"right"}>
                    <ExpansionPanel className={"panel"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter3 className={"white-icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                MPP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"course-button"}>
                                MAP
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
            </div>
        );
    }
}

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.black,
        color: 'rgba(255, 233, 36, 0.69)',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);
