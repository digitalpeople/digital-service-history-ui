import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from './auth.action';

describe('auth.action', () => {
  describe('loginRequest', () => {
    it('should return action', () => {
      const actual = loginRequest();

      expect(actual).toMatchSnapshot();
    });
  });
  describe('loginSuccess', () => {
    it('should return action', () => {
      const userId = 'test-user-id';

      const actual = loginSuccess(userId);

      expect(actual).toMatchSnapshot();
    });
  });
  describe('loginFailure', () => {
    it('should return action', () => {
      const error = {
        message: 'test-error-message',
      };

      const actual = loginFailure(error);

      expect(actual).toMatchSnapshot();
    });
  });
  describe('logout', () => {
    it('should return action', () => {
      const actual = logout();

      expect(actual).toMatchSnapshot();
    });
  });
});
