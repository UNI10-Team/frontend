import React, {Component} from "react";
import bundle from "../../util/nls";
import Button from "@material-ui/core/Button";
import {Filter1, Filter2, Filter3} from "@material-ui/icons";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import './LeftMenuComponent.css'

export interface LeftMenuComponentProperties {
}

export interface LeftMenuComponentState {
}

export class LeftMenuComponent extends Component<LeftMenuComponentProperties, LeftMenuComponentState> {

    constructor(props: LeftMenuComponentProperties) {
        super(props);
    }

    render() {
        const messages = bundle.messages;
        return (
            <div className={"panel-div"}>
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
