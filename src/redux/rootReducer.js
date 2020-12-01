import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import systemReducer from './system/systemReducer';

const rootReducer = combineReducers({
  user: userReducer,
  system: systemReducer,
});

export default rootReducer;
