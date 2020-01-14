import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import {Login} from "./components/login/Login";
import Register from "./components/register/Register";
import history from "./history";
import {AppWrapper} from "./AppWrapper"

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={AppWrapper}/>
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
