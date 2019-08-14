import reducer from './auth.reducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../action.type';

describe('auth.reducer', () => {
  describe('initial state', () => {
    describe('unmanaged action type', () => {
      it('should return state', () => {
        const action = {
          type: 'test-action-type',
        };

        const actual = reducer(undefined, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_REQUEST, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_REQUEST,
        };

        const actual = reducer(undefined, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_SUCCESS, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_SUCCESS,
          userId: 'test-user-id',
        };

        const actual = reducer(undefined, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_FAILURE, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_FAILURE,
          error: {
            mesage: 'test-error-message',
          },
        };

        const actual = reducer(undefined, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGOUT, () => {
      it('should return state', () => {
        const action = {
          type: LOGOUT,
        };

        const actual = reducer(undefined, action);

        expect(actual).toMatchSnapshot();
      });
    });
  });
  describe('modified state', () => {
    const state = {
      foo: 'bar',
    };

    describe('unmanaged action type', () => {
      it('should return state', () => {
        const action = {
          type: 'test-action-type',
        };

        const actual = reducer(state, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_REQUEST, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_REQUEST,
        };

        const actual = reducer(state, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_SUCCESS, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_SUCCESS,
          userId: 'test-user-id',
        };

        const actual = reducer(state, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGIN_FAILURE, () => {
      it('should return state', () => {
        const action = {
          type: LOGIN_FAILURE,
          error: {
            mesage: 'test-error-message',
          },
        };

        const actual = reducer(state, action);

        expect(actual).toMatchSnapshot();
      });
    });
    describe(LOGOUT, () => {
      it('should return state', () => {
        const action = {
          type: LOGOUT,
        };

        const actual = reducer(state, action);

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
