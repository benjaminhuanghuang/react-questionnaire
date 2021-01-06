import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import useAuthListener from './hooks/useAuthListener';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUserById, setLoading, setNeedVerification } from "./redux/authActions";

function App() {
  useAuthListener();
  const { loading } = useSelector((state) => state.auth);
  
  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/signup" component={Signup} exact />
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
