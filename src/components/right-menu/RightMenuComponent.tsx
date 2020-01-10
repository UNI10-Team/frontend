import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {AccountCircle, Home, SettingsPower} from "@material-ui/icons";
import history from "../../history";
import './RightMenuComponent.css'

export interface RightMenuComponentProperties {
    role: string;
}

export interface RightMenuComponentState {
}

export class RightMenuComponent extends Component<RightMenuComponentProperties, RightMenuComponentState> {

    constructor(props: RightMenuComponentProperties) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button className={"button-turnoff"}>
                    <SettingsPower className={"white-icon"}/>
                </Button>
                <Button className={"button-profile"} onClick={()=>history.push(`/${this.props.role}/profile`)}>
                    <AccountCircle className={"white-icon"}/>
                </Button>
                <Button className={"button-home"} onClick={()=>history.push('/teacher/home')}>
                    <Home className={"white-icon"}/>
                </Button>
            </div>
        );
    }
}

