import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
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
// Redux
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetEmail, setError, setSuccess } from "../redux/authActions";

import Question from "./Question";

function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const { user, needVerification, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <div className="dashborad__body">
        {needVerification && <Alert severity="warning">Please verify your email address</Alert>}
        Dashboard
      </div>
    </div>
  );
}

export default Dashboard;
