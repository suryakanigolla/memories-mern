import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import IndexPage from "./pages";
import HomePage from "./pages/home";

import "./App.scss";

const App = () => {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/">
            <IndexPage></IndexPage>
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  );
};

export default App;
