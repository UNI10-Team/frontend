import React from 'react';
import './App.css';
//import { Route, Redirect, Switch } from 'react-router-dom';
import {StudentCoursesComponent} from './components/student-courses/StudentCoursesComponent';
import Register from './components/register/Register';
import NotFound from './components/not-found/NotFound';

const App: React.FC = () => {
    return (
        <StudentCoursesComponent/>
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
