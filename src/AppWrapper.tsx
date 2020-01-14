import {Redirect, Route} from 'react-router-dom'
import {Component} from "react";
import {userService} from "./services/UserService";
import * as React from "react";
import {StudentHomePage} from "./components/home/student-home/StudentHomePage";
import {TeacherHomePage} from "./components/home/teacher-home/TeacherHomePage";
import {StudentProfile} from "./components/profile/student-profile/StudentProfile";
import {TeacherProfile} from "./components/profile/teacher-profile/TeacherProfile";
import {StudentCourses} from "./components/student-courses/StudentCourses";
import {TeacherCourses} from "./components/teacher-courses/TeacherCourses";
import {StudentCourse} from "./components/student-courses/StudentCourse";
import {TeacherCourse} from "./components/teacher-courses/TeacherCourse";
import {StudentCoursesViewer} from "./components/student-courses/StudentCoursesViewer";
import {TeacherCoursesViewer} from "./components/teacher-courses/TeacherCoursesViewer";
import {StudentSeminariesViewer} from "./components/student-courses/StudentSeminariesViewer";
import {TeacherSeminariesViewer} from "./components/teacher-courses/TeacherSeminariesViewer";
import {StudentLaboratoriesViewer} from "./components/student-courses/StudentLaboratoriesViewer";
import {TeacherLaboratoriesViewer} from "./components/teacher-courses/TeacherLaboratoriesViewer";

export class AppWrapper extends Component{
    render(){

        if(!userService.isConnected())
            return <Redirect to="/login"/>
        return(
            <div>
                <Route exact path="/student/home" component={StudentHomePage}/>
                <Route exact path="/teacher/home" component={TeacherHomePage}/>
                <Route exact path="/student/profile" component={StudentProfile}/>
                <Route exact path="/teacher/profile" component={TeacherProfile}/>
                <Route exact path="/student/courses" component={StudentCourses}/>
                <Route exact path="/teacher/courses" component={TeacherCourses}/>
                <Route exact path="/student/courses/:courseId" component={StudentCourse}/>
                <Route exact path="/teacher/courses/:courseId" component={TeacherCourse}/>
                <Route exact path="/student/courses/:courseId/viewer" component={StudentCoursesViewer}/>
                <Route exact path="/teacher/courses/:courseId/viewer" component={TeacherCoursesViewer}/>
                <Route exact path="/student/seminaries/:courseId/viewer" component={StudentSeminariesViewer}/>
                <Route exact path="/teacher/seminaries/:courseId/viewer" component={TeacherSeminariesViewer}/>
                <Route exact path="/student/labs/:courseId/viewer" component={StudentLaboratoriesViewer}/>
                <Route exact path="/teacher/labs/:courseId/viewer" component={TeacherLaboratoriesViewer}/>
            </div>
        );
    }
}
