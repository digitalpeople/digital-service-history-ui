import {
  setNavigationItem,
  resetNavigation,
} from './action-types';
import initialState from './navigation.state';

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case setNavigationItem: {
    return {
      ...state,
      selected: action.selected,
    };
  }
  case resetNavigation:
    return initialState;

  default:
    return state;
  }
};

export default navigationReducer;
