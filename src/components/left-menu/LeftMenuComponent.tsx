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
import history from "../../history";

export interface LeftMenuComponentProperties {
}

export interface LeftMenuComponentState {
    expandedItem: number
}

export interface LeftMenuComponentItemProperties {
    year: number,
    title: string,
    expansionClass: string,
    expanded?: boolean,
    onChange: (year: number, expanded: boolean) => void
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
        const {
            title,
            expansionClass,
            year, onChange,
            expanded = false
        } = this.props;
        const {subjects} = this.state;
        return (
            <LightTooltip title={title} placement={'right'}>
                <ExpansionPanel className={expansionClass} expanded={expanded} onChange={(event, nowExpanded) => {
                    onChange(year, nowExpanded);
                }}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        {LeftMenuComponentItem.getIcon(year)}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={'panelDetails'}>
                        <List className={'list'}>
                            <div className={'items'}>
                                {
                                    subjects.map(subject => {
                                        return (
                                            <Button key={subject.id} className={"course-button"} onClick={()=>history.push(`/student/courses/${subject.name}`)}>
                                                {LeftMenuComponentItem.getSubjectName(subject.name)}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </List>
                    </ExpansionPanelDetails>
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


    constructor(props: Readonly<LeftMenuComponentProperties>) {
        super(props);
        this.state = {
            expandedItem: 0
        }
    }

    render() {
        const messages = i18NService.getBundle();
        const {expandedItem} = this.state;
        return (
            <div>
                <LeftMenuComponentItem year={1}
                                       expanded={expandedItem === 1}
                                       onChange={this.onSelectItem}
                                       title={`${messages.YEAR} 1`}
                                       expansionClass={'panel-1'}/>


                <LeftMenuComponentItem year={2}
                                       expanded={expandedItem === 2}
                                       onChange={this.onSelectItem}
                                       title={`${messages.YEAR} 2`}
                                       expansionClass={'panel'}/>


                <LeftMenuComponentItem year={3}
                                       expanded={expandedItem === 3}
                                       onChange={this.onSelectItem}
                                       title={`${messages.YEAR} 3`}
                                       expansionClass={'panel'}/>

            </div>
        );
    }

    private onSelectItem = (year: number, expanded: boolean) => {
        let expandedItem = 0;
        if (expanded) {
            expandedItem = year;
        }
        this.setState({
            expandedItem
        })
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
