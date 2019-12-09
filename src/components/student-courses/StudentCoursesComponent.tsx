import React, {Component} from "react";

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
            </div>
        );
    }
}
