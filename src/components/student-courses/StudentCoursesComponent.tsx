import React, {Component} from "react";
import { Filter1, Filter2, Filter3, Filter4, Home, AccountCircle, SettingsPower } from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import './StudentCourses.css'
export interface StudentCoursesProperties {

}


export interface StudentCoursesState {
}

export class StudentCoursesComponent extends Component<StudentCoursesProperties, StudentCoursesState> {

    constructor(props: StudentCoursesProperties) {
        super(props);
    }

    render() {
        return (
            <div className={"student-courses-component"}>

                <div className={"grey-rectangle"}>
                    <div className={"logo"}/>
                    <div className={"main-text-1"}>
                        Ce vei studia astazi?
                    </div>
                    <div className={"main-text-2"}>
                        Arunca o privire peste materiile disponibile.
                    </div>
                </div>
                <Button className={"button-1"}>
                    <Filter1 className={"icon"}/>
                </Button>
                <Button className={"button-2"}>
                    <Filter2 className={"icon"}/>
                </Button>
                <Button className={"button-3"}>
                    <Filter3 className={"icon"}/>
                </Button>
                <Button className={"button-4"}>
                    <Filter4 className={"icon"}/>
                </Button>
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
