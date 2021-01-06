import { GET_QUESTIONS, GET_USER_ANSWERS, SUBMIT_ANSWER } from './consts';

const initialState = {
  questions: [],
  quesitonsLoaded: false,
  userAnswers: [],
  userAnswersLoaded: false,
  currentQuestionId: ""
}

const questionReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        quesitonsLoaded: true
      }
    case GET_USER_ANSWERS:
      return {
        ...state,
        userAnswers: action.payload,
        userAnswersLoaded: true
      }

    default:
      return state;
  }
}

export default questionReducer;