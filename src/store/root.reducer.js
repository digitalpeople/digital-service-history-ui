import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import navigationReducer from '../components/navigation/navigation.reducer';

export default combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
});
