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


export interface StudentCoursesProperties {
}

export interface StudentCoursesState {
}

export class StudentCoursesComponent extends Component<StudentCoursesProperties, StudentCoursesState> {

    constructor(props: StudentCoursesProperties) {
        super(props);
    }
        
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
                        {messages.TAKE_A_LOOK_TO_COURSES}
                    </div>
                </div>
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"icon"}/>
                </Button>
                <Button className={"button-profile"}>
                    <AccountCircle className={"icon"}/>
                </Button>
                <Button className={"button-home"}>
                    <Home className={"icon"}/>
                </Button>
                <LightTooltip title={`${messages.YEAR} 1`} placement={"right"}>
                <ExpansionPanel className={"panel-1"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter1 className={"icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                FP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                ASC
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
                <LightTooltip title={`${messages.YEAR} 2`} placement={"right"}>
                <ExpansionPanel className={"panel"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter2 className={"icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                MPP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                MAP
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
                <LightTooltip title={`${messages.YEAR} 3`} placement={"right"}>
                <ExpansionPanel className={"panel"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter3 className={"icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                MPP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                MAP
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </LightTooltip>
                <LightTooltip title={`${messages.YEAR} 4`} placement={"right"}>
                <ExpansionPanel className={"panel"}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Filter4 className={"icon"}/>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
                                MPP
                            </Button>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={"button"}>
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
