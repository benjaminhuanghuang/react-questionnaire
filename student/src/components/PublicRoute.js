import React from "react";
import { Route, Redirect } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state) => state.auth);

  return <Route {...rest} render={(props) => (!authenticated ? <Component {...props} /> : <Redirect to="/dashboard" />)} />;
};

export default PublicRoute;
