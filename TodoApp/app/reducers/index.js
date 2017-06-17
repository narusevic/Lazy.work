import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoItems from './todoItems';
import appSettings from './appSettings';
import registration from './registration';
import login from './login';
import userInfo from './userInfo';
import admin from './admin';

const rootReducer = combineReducers({
  todoItems,
  appSettings,
  registration,
  login,
  userInfo,
  admin,
  routing: routerReducer
});

export default rootReducer;
