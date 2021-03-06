import React from "react";
import { Route, Redirect } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        return !authenticated ? <Component {...props} /> : <Redirect to="/dashboard" />;
      }}
    ></Route>
  );
};

export default PublicRoute;
