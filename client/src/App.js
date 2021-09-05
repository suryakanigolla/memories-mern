import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./layouts/ProtectedRoute";

import IndexPage from "./pages";
import SignUpPage from "./pages/signup";
import HomePage from "./pages/home";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/home" component={HomePage}></ProtectedRoute>
        <Route path="/signup" component={SignUpPage}></Route>
        <Route path="/" component={IndexPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
