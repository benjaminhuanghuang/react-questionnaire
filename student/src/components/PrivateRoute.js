import React from "react";
import { Route, Redirect } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export default function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
