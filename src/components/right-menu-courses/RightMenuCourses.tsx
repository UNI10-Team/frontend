import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import './RightMenuCourses.css'
import {CommentsComponentStudent} from "../comments/CommentsComponentStudent";
import {LinksComponentStudent} from "../links/LinksComponentStudent";

export interface RightMenuCoursesProperties {
    role: string;
    courseId:number;
}

export interface RightMenuCoursesState {
    openCommentsComponent?: boolean;
    openLinksComponent?: boolean;
}

export class RightMenuCourses extends Component<RightMenuCoursesProperties, RightMenuCoursesState> {
    constructor(props: RightMenuCoursesProperties){
        super(props);
        this.state={openCommentsComponent:false,openLinksComponent:false};
    }
    toogleOpenCommentsComponent(){
        this.setState({openCommentsComponent: !this.state.openCommentsComponent});
    }
    toogleOpenLinksComponent(){
        this.setState({openLinksComponent: !this.state.openLinksComponent});
    }

    render() {
        return (
            <div>
                {this.state.openCommentsComponent===true? <CommentsComponentStudent subjectId={this.props.courseId}/> : null}
                {this.state.openLinksComponent===true? <LinksComponentStudent/> : null}
                <Button className={"button-comments"} onClick={() => this.toogleOpenCommentsComponent()}>
                    <NotificationsNoneOutlinedIcon className={"white-icon"} fontSize={"large"}/>
                </Button>
                <Button className={"button-links"} onClick={()=>this.toogleOpenLinksComponent()}>
                    <GetAppOutlinedIcon className={"white-icon"} fontSize={"large"}/>
                </Button>
            </div>
        );
    }
}
