import {
  setNavigationItem,
  resetNavigation,
} from './action-types';

export const setNavigationItemAction = selected => ({
  type: setNavigationItem,
  selected,
});

export const resetNavigationAction = () => ({
  type: resetNavigation,
});
