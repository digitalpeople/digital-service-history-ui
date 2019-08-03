import axios from 'axios';
import {
  login,
  logout,
} from './action-types';

export const loginAction = ({ username, password }) => {
  axios.post('/auth/login', {
    username,
    password,
  })
    .then((response) => {
      localStorage.setItem('userToken', response.data.hash);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.err('error', error);
      localStorage.removeItem('userToken');
    });

  return {
    type: login,
    username,
    password,
  };
};

export const logoutAction = () => ({
  type: logout,
});
