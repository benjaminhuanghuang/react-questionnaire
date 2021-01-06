import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { auth } from "./firebase";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUserById, setLoading, setNeedVerification } from "./redux/authActions";

function App() {
  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PrivateRoute path="/" component={Dashboard} exact />
        <PublicRoute path="/signup" component={Signup} exact />
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
      </Switch>
    </Router>
  );
}

export default App;
