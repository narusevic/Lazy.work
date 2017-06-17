import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menuReducer from './menuReducer';

const rootReducer = combineReducers({ 
    menuReducer, routing: routerReducer
});

export default rootReducer;