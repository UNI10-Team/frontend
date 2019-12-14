import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Login } from './components/login/Login';
import Register from './components/register/Register';
import NotFound from './components/not-found/NotFound';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/login" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
