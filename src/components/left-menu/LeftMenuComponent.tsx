import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {List, withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import './LeftMenuComponent.css'
import {i18NService} from "../../services/I18NService";
import Subject from "../../interfaces/subject";
import {Page} from "../../interfaces/page";
import {subjectService} from "../../services/SubjectService";
import {Filter1, Filter2, Filter3} from "@material-ui/icons";

export interface LeftMenuComponentProperties {
}

export interface LeftMenuComponentState {

}

export interface LeftMenuComponentItemProperties {
    year: number,
    title: string,
    expansionClass: string
}

export interface LeftMenuComponentItemState {
    subjects: Subject[]
}


export class LeftMenuComponentItem extends Component<LeftMenuComponentItemProperties, LeftMenuComponentItemState> {


    constructor(props: Readonly<LeftMenuComponentItemProperties>) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    render() {
        const {title, expansionClass, year} = this.props;
        const {subjects} = this.state;
        return (
            <LightTooltip title={title} placement={'right'}>
                <ExpansionPanel className={expansionClass}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        {LeftMenuComponentItem.getIcon(year)}
                    </ExpansionPanelSummary>
                    <List>
                        {
                            subjects.map(subject => {
                                return (
                                    <ExpansionPanelDetails key={subject.id}>
                                        <Button className={"course-button"}>
                                            {LeftMenuComponentItem.getSubjectName(subject.name)}
                                        </Button>
                                    </ExpansionPanelDetails>
                                )
                            })
                        }
                    </List>
                </ExpansionPanel>
            </LightTooltip>
        )
    }

    componentDidMount(): void {
        subjectService.getSubjectsByYear(this.props.year).then((page: Page<Subject>) => {
            this.setState({
                subjects: page.content
            });
        });
    }

    private static getIcon(year: number): JSX.Element {
        switch (year) {
            case 1:
                return <Filter1 className={"white-icon"}/>;
            case 2:
                return <Filter2 className={"white-icon"}/>;
            case 3:
                return <Filter3 className={"white-icon"}/>;
            default:
                return <Filter1/>
        }
    }

    private static getSubjectName(initial: string): string {
        const words = initial.split(' ');
        let finalName = '';
        for (let word of words) {
            finalName += word.charAt(0);
        }
        return finalName;
    }
}

export class LeftMenuComponent extends Component<LeftMenuComponentProperties, LeftMenuComponentState> {

    render() {
        const messages = i18NService.getBundle();
        return (
            <div>
                <LeftMenuComponentItem year={1} title={`${messages.YEAR} 1`} expansionClass={'panel-1'}>

                </LeftMenuComponentItem>

                <LeftMenuComponentItem year={2} title={`${messages.YEAR} 2`} expansionClass={'panel'}>

                </LeftMenuComponentItem>

                <LeftMenuComponentItem year={3} title={`${messages.YEAR} 3`} expansionClass={'panel'}>

                </LeftMenuComponentItem>
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
