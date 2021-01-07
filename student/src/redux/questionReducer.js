import {
  SET_QUESTIONS,
  SET_FETCH_QUESTIONS_LOADING,
  SET_FETCH_QUESTIONS_ERROR,
  SET_CURRENT_QUESTION_ID,
} from "./consts";

const initialState = {
  questions: [],
  currentQuestionId: null,
  isQuestionsLoading: false,
  questionsError: "",
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_FETCH_QUESTIONS_LOADING:
      return {
        ...state,
        isQuestionsLoading: action.payload,
      };
    case SET_FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        questionsError: action.payload,
      };
    case SET_CURRENT_QUESTION_ID:
      return {
        ...state,
        currentQuestionId: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
