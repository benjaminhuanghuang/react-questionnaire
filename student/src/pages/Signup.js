import React from "react";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import {db} from '../firebase'
import firebase from 'firebase'
// Redux
import { useDispatch } from "react-redux";
import { selectUser, login } from "./redux/userSlice";


import "./Signup.css";

function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection('email').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

  };

  return (
    <div className="signup">
      <div className="signup__header">
        <h3>Signup</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" type="email" placeholder="Email:" ref={register({ required: true })} />
        {errors.to && <p className="usename__error">Name is required</p>}
        <input name="password" type="password" placeholder="Password:" ref={register({ required: true })} />
        {errors.subject && <p className="signup__error">Password is required</p>}
        <input name="password2" type="password" placeholder="Confirm Password:" ref={register({ required: true })} />
        {errors.message && <p className="signup__error">Password is required</p>}
        <div className="singup__options">
          <Button className="signup__submit" variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
