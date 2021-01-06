import {
  SET_USER,
  SET_LOADING,
  SIGN_OUT,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
} from "./consts";

import firebase from "firebase";

// Create user
export const signup = (data, onError) => {
  return async (dispatch) => {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData = {
          email: data.email,
          dispalyName: data.name,
          id: res.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };
        await firebase.firestore().collection("/users").doc(res.user.uid).set(userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: NEED_VERIFICATION,
        });
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
      onError();
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

// Get user by id
export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const user = await firebase.firestore().collection("users").doc(id).get();
      if (user.exists) {
        const userData = user.data();
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// Set loading
export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

// Log in
export const signin = (data, onError) => {
  return async (dispatch) => {
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData = {
          email: res.user.email,
          displayName: res.user.displayName,
          id: res.user.uid,
        };
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      onError&&onError();
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    }
  };
};

// Log out
export const signout = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await firebase.auth().signOut();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
};

// Set error
export const setError = (msg) => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

// Set need verification
export const setNeedVerification = ()=> {
  return (dispatch) => {
    dispatch({
      type: NEED_VERIFICATION,
    });
  };
};

// Set success
export const setSuccess = (msg) => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};

// Send password reset email
export const sendPasswordResetEmail = (
  email,
  successMsg
)=> {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    }
  };
};
