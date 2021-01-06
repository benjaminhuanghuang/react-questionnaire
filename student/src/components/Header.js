import React from "react";
import { useHistory, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { IconButton, Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux/authActions";
//
import "./Header.css";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const signOut = () => {
    dispatch(signout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.unahealydesign.com/wp-content/uploads/2014/01/blog-logo-design-questionnaire.jpg"
          alt=""
        />
      </div>
      <div className="header__middle"></div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        {!authenticated ? (
          <div className="buttons">
            <Button onClick={() => history.push("/signup")} className="is-primary">
              Sign Up
            </Button>
            <Button onClick={() => history.push("/login")}>Log In</Button>
          </div>
        ) : (
          <Button onClick={signOut}>Sign Out</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
