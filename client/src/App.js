import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import IndexPage from "./pages";
import SignUpPage from "./pages/signup";
import HomePage from "./pages/home";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <MainLayout>
            <HomePage></HomePage>
          </MainLayout>
        </Route>
        <Route path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/">
          <IndexPage></IndexPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
