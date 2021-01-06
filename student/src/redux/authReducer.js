import { SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from "./consts";

const initialState = {
  user: null,
  authenticated: false,
  loading: true,
  error: "",
  needVerification: false,
  success: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      if (action.payload) {
        return {
          ...state,
          user: action.payload,
          authenticated: true,
          loading: false
        };
      } else {
        return {
          ...state,
          user: null,
          authenticated: false,
          loading: false
        };
      }
    }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case NEED_VERIFICATION:
      return {
        ...state,
        needVerification: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
