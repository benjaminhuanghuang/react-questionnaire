import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import firebase from "firebase";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetEmail, setError, setSuccess } from "../redux/authActions";

import "./ForgotPassword.css";

function ForgotPassword() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { error, success } = useSelector((state) => state.auth);
  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
      if (success) {
        dispatch(setSuccess(""));
      }
    };
  }, [error, dispatch, success]);

  const onSubmit = async (formData) => {
    setLoading(true);
    await dispatch(sendPasswordResetEmail(formData.email, "Email sent!"));
    setLoading(false);
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
