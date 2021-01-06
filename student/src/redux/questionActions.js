import { GET_QUESTIONS, SET_QUESTIONS_LOADING, SET_QUESTIONS_ERROR, GET_USER_ANSWERS, SUBMIT_ANSWER } from "./consts";
import { db } from "./firebase";

// Get images
export const getQuestions = (query) => {
  return async (dispatch) => {
    try {
      db.collection("questions")
        .orderBy("name", "desc")
        .onSnapshot((snapshot) => {
          const questions = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          dispatch({
            type: GET_QUESTIONS,
            payload: questions,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

// Set loading
export const setQuestionsLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_QUESTIONS_LOADING,
      payload: value,
    });
  };
};

// Set error
export const setQuesitonsError = (msg) => {
  return (dispatch) => {
    dispatch({
      type: SET_QUESTIONS_ERROR,
      payload: msg,
    });
  };
};