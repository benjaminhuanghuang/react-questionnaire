import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './authReducer';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  question: questionReducer,
  answer: answerReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;