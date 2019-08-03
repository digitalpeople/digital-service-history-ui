import { combineReducers } from 'redux';
import navigationReducer from '../components/navigation/navigation.reducer';
import loginReducer from '../components/login/login.reducer';

export default combineReducers({
  navigation: navigationReducer,
  login: loginReducer,
});
