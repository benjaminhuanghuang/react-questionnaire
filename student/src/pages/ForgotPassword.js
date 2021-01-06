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

import "./ForgotPassword.css";

function ForgotPassword() {
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
    <div className="forgotPassword">
      <div className="forgotPassword__container">
        <div className="forgotPassword__header">
          <h3>Reset Password</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="email" type="email" placeholder="Email:" ref={register({ required: true })} />
          {errors.to && <p className="usename__error">Name is required</p>}
          <div className="singup__options">
            <Button className="signup__submit" variant="contained" color="primary" type="submit">
              Reset password
            </Button>
          </div>
        </form>
        <div className="signup__link">
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
