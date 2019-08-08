import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../action.type';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = userId => ({
  type: LOGIN_SUCCESS,
  userId,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const loginAction = ({ username, password }) => (dispatch) => {
  dispatch(loginRequest());
  return axios.post('/auth/login', {
    username,
    password,
  })
    .then((response) => {
      localStorage.setItem('userToken', response.data.token);
      dispatch(loginSuccess(response.data.userId));
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('error', error);
      localStorage.removeItem('userToken');
      dispatch(loginFailure(error));
    });
};

export const logout = () => ({
  type: LOGOUT,
});

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('userToken');
  return dispatch(logout());
};
