import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../action.type';
import initialState from './auth.state';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_REQUEST: {
    return {
      ...state,
    };
  }

  case LOGIN_SUCCESS: {
    return {
      ...state,
      isAuthenticated: true,
      userId: action.userId,
    };
  }

  case LOGIN_FAILURE: {
    return {
      ...state,
      message: action.error.message,
    };
  }

  case LOGOUT:
    return initialState;

  default:
    return state;
  }
};

export default authReducer;
