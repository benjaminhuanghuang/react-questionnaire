import React from "react";
import { Route, Redirect } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return <Route {...rest} render={(props) => (!user ? <Component {...props} /> : <Redirect to="/dashboard" />)} />;
};

export default PublicRoute;
