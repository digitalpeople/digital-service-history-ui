import { combineReducers } from 'redux';
import navigationReducer from '../components/navigation/navigation.reducer';

export default combineReducers({
  navigation: navigationReducer,
});
