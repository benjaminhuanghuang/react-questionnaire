import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import firebase from "firebase";
import Message from "../components/Message"
// Redux
import { useDispatch, useSelector } from "react-redux";
import { signup, setError } from "../redux/authActions";

import "./Signup.css";

function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const onSubmit = (formData) => {
    setLoading(true);
    dispatch(signup(formData, () => setLoading(false)));
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__header">
          <h3>Signup</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <Message type="danger" msg={error} />}
          <input name="name" type="text" placeholder="Name:" ref={register({ required: true })} />
          {errors.to && <p className="usename__error">Name is required</p>}
          <input name="email" type="email" placeholder="Email:" ref={register({ required: true })} />
          {errors.to && <p className="usename__error">Email is required</p>}
          <input name="password" type="password" placeholder="Password:" ref={register({ required: true })} />
          {errors.subject && <p className="signup__error">Password is required</p>}
          <input name="password2" type="password" placeholder="Confirm Password:" ref={register({ required: true })} />
          {errors.message && <p className="signup__error">Password is required</p>}
          <div className="singup__options">
            <Button className="signup__submit" variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </div>
        </form>
        <div className="signup__link">
          Already have account? <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
