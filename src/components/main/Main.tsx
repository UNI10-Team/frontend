import React, {Component} from "react";
import './TeacherCourses.css'
import {LeftMenuComponent} from "../left-menu/LeftMenuComponent";
import {RightMenuComponent} from "../right-menu/RightMenuComponent";


export class Main extends Component {

    render() {
        return (
            <div>
                <RightMenuComponent role={"teacher"}/>
                <LeftMenuComponent role={"teacher"}/>
                {this.props.children}
            </div>
        );
    }
}
