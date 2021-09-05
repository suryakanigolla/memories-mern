import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const userData = useSelector((state) => state.auth.userData);
  const { component: Component, ...rest } = props;

  if (userData) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to="/" />;
};

export default ProtectedRoute;
