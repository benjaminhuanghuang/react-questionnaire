import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { signin, setError } from "../redux/authActions";

import "./Login.css";

function Login() {
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
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signin(formData, () => setLoading(false)));
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
            <Button className="login__submit" variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Log In"}
            </Button>
          </div>
        </form>
        <div className="signup__link">
          Do not have account? <Link to="/signup">Signup</Link>
        </div>
        <div className="signup__link">
          Forget password? <Link to="/forgot-password">Reset Passowd</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
