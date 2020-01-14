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
import {CoursesViewer} from "./components/courses-viewer/CoursesViewer";
import {TeacherCoursesViewer} from "./components/teacher-courses-viewer/TeacherCoursesViewer";

import history from "./history";
import {StudentCourse} from "./components/student-course/StudentCourse";

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} />
            <Route path="/student/home" component={StudentHomePage}/>
            <Route exact path="/teacher/home" component={TeacherHomePage}/>
            <Route path="/student/profile" component={StudentProfile}/>
            <Route exact path="/teacher/profile" component={TeacherProfile}/>
            <Route exact path="/student/courses" component={StudentCourses}/>
            <Route exact path="/teacher/courses" component={TeacherCourses}/>
            <Route extract path="/student/courses/viewer" component={CoursesViewer}/>
            <Route extract path="/teacher/courses/viewer" component={TeacherCoursesViewer}/>

            <Route extract path="/student/courses/:courseId/viewer" component={CoursesViewer}/>
            <Route exact path="/student/courses/:courseId" component={StudentCourse}/>
            <Redirect from="/" to="/login"/>
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
