import React from 'react';
import './App.css';
import {StudentProfile} from "./components/profile/student-profile/StudentProfile";
import {TeacherProfile} from "./components/profile/teacher-profile/TeacherProfile";
import {HomePage} from "./components/home/HomePage";
import {StudentCoursesComponent} from './components/student-courses/StudentCoursesComponent';
import Register from './components/register/Register';
import NotFound from './components/not-found/NotFound';
const App: React.FC = () => {
  return (
    <HomePage/>
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
