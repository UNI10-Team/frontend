import React from 'react';
import './App.css';
import {StudentProfile} from "./components/profile/student-profile/StudentProfile";
import {TeacherProfile} from "./components/profile/teacher-profile/TeacherProfile";
import {StudentCoursesComponent} from './components/student-courses/StudentCoursesComponent';
import Register from './components/register/Register';
import NotFound from './components/not-found/NotFound';
import {Login} from "./components/login/Login";
import {TeacherHomePage} from "./components/home/teacher-home/TeacherHomePage";
import {StudentHomePage} from "./components/home/student-home/StudentHomePage";
const App: React.FC = () => {
  return (
    <TeacherHomePage/>
  );
};
/*<React.Fragment>
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/not-found" component={NotFound} />
    <Redirect from="/" exact to="/login" />
    <Redirect to="/not-found" />
  </Switch>
</React.Fragment>*/
export default App;
