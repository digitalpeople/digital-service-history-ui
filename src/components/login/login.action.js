import {
  login,
  logout,
} from './action-types';

export const loginAction = ({ username, password }) => ({
  type: login,
  username,
  password,
});

export const logoutAction = () => ({
  type: logout,
});
