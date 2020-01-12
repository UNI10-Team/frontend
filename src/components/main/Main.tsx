import React, {Component} from "react";
import {Home, AccountCircle, SettingsPower} from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import './TeacherCourses.css'
import bundle from '../../util/nls';
import history from '../../history';
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";


export class Main extends Component {

    render() {
        return (
            <div>
                <RightMenuComponent role={"teacher"}/>
                <LeftMenuComponent/>
                {this.props.children}
            </div>
        );
    }
}
