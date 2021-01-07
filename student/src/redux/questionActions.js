import {
  SET_QUESTIONS,
  SET_FETCH_QUESTIONS_LOADING,
  SET_FETCH_QUESTIONS_ERROR,
  SET_CURRENT_QUESTION_ID,
} from "./consts";
import { db } from "../firebase";

// Fetch all questions
export const fetchQuestions = (query) => {
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
            type: SET_QUESTIONS,
            payload: questions,
          });
          if (questions.length > 0)
          {
            const firstId = questions[0].id;
            dispatch({
              type: SET_CURRENT_QUESTION_ID,
              payload: firstId,
            });
          }
        });
    } catch (err) {
      dispatch({
        type: SET_QUESTIONS,
        payload: SET_FETCH_QUESTIONS_ERROR,
      });
      dispatch({
        type: SET_FETCH_QUESTIONS_LOADING,
        payload: false,
      });
    }
  };
};


export const selectQuestion = (id) => {
  return  (dispatch) => {
    dispatch({
      type: SET_CURRENT_QUESTION_ID,
      payload: id,
    });   
  };
};