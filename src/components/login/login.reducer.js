import {
  login,
  logout,
} from './action-types';
import initialState from './login.state';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case login: {
    return {
      ...state,
      login: true,
    };
  }
  case logout:
    return initialState;

  default:
    return state;
  }
};

export default loginReducer;
