import React, {Component} from "react";
import './LinksComponentStudent.css'
import {i18NService} from "../../services/I18NService";

export interface LinksComponentStudentProperties {
}


export interface LinksComponentStudentState {
    links: []
}

export class LinksComponentStudent extends Component<LinksComponentStudentProperties, LinksComponentStudentState> {

    constructor(props: LinksComponentStudentProperties) {
        super(props);
        this.state = {
            links: [],
        }
    }

    render() {
        const {links} = this.state;
        const messages = i18NService.getBundle();
        return (
            <div className={"grey-rectangle-links"}>
                <label className={"link"}>{messages.USEFUL_LINKS}</label>
            </div>

        );
    }
}
