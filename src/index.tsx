import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/login/Login";
import Register from "./components/register/Register";
import {StudentHomePage} from "./components/home/student-home/StudentHomePage";
import {TeacherHomePage} from "./components/home/teacher-home/TeacherHomePage";
import {StudentProfile} from "./components/profile/student-profile/StudentProfile";
import {TeacherProfile} from "./components/profile/teacher-profile/TeacherProfile";
import {StudentCourses} from "./components/student-courses/StudentCourses";
import {TeacherCourses} from "./components/teacher-courses/TeacherCourses";
import {TeacherCoursesViewer} from "./components/teacher-courses/TeacherCoursesViewer";

import history from "./history";
import {StudentCourse} from "./components/student-courses/StudentCourse";
import {StudentCoursesViewer} from "./components/student-courses/StudentCoursesViewer";
import {StudentSeminariesViewer} from "./components/student-courses/StudentSeminariesViewer";
import {TeacherSeminariesViewer} from "./components/teacher-courses/TeacherSeminariesViewer";
import {StudentLaboratoriesViewer} from "./components/student-courses/StudentLaboratoriesViewer";
import {TeacherLaboratoriesViewer} from "./components/teacher-courses/TeacherLaboratoriesViewer";

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} />
            <Route exact path="/student/home" component={StudentHomePage}/>
            <Route exact path="/teacher/home" component={TeacherHomePage}/>
            <Route exact path="/student/profile" component={StudentProfile}/>
            <Route exact path="/teacher/profile" component={TeacherProfile}/>
            <Route exact path="/student/courses" component={StudentCourses}/>
            <Route exact path="/teacher/courses" component={TeacherCourses}/>
            <Route exact path="/student/courses/:courseId" component={StudentCourse}/>
            <Route exact path="/student/courses/:courseId/viewer" component={StudentCoursesViewer}/>
            <Route exact path="/teacher/courses/:courseId/viewer" component={TeacherCoursesViewer}/>
            <Route exact path="/student/seminaries/:courseId/viewer" component={StudentSeminariesViewer}/>
            <Route exact path="/teacher/seminaries/:courseId/viewer" component={TeacherSeminariesViewer}/>
            <Route exact path="/student/labs/:courseId/viewer" component={StudentLaboratoriesViewer}/>
            <Route exact path="/teacher/labs/:courseId/viewer" component={TeacherLaboratoriesViewer}/>
            <Redirect from="/" to="/login"/>
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
