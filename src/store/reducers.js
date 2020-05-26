import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import generalReducer from './general/generalReducer';

export default combineReducers({
  auth: authReducer,
  general: generalReducer
});