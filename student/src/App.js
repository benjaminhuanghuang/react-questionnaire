import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Question from "./pages/Question";
import { auth } from "./firebase";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} exact />
        <PublicRoute path="/signup" component={Signup} exact />
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
      </Switch>
    </Router>
  );
}

export default App;
