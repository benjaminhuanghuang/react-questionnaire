import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
//
import { db } from "../firebase";

import "./Dashboard.css";
//
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";
import Question from "./Question";

function Dashboard() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    db.collection("email")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setQuestions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="dashborad__body">
        <Sidebar />
        <Switch>
          <PrivateRoute path="/question" component={Question} exact />
        </Switch>
      </div>
      ={" "}
    </div>
  );
}

export default Dashboard;
