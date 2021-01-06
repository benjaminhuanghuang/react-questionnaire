import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import firebase from "firebase";
// Redux
import { useDispatch } from "react-redux";
import { selectUser, login } from "../redux/userSlice";

import "./Login.css";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    db.collection("email").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <h3>Login</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="email" type="email" placeholder="Email:" ref={register({ required: true })} />
          {errors.to && <p className="signup__error">Name is required</p>}
          <input name="password" type="password" placeholder="Password:" ref={register({ required: true })} />
          {errors.subject && <p className="signup__error">Password is required</p>}
          <div className="login__options">
            <Button className="login__submit" variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
        <div className="signup__link">
          Do not have account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
