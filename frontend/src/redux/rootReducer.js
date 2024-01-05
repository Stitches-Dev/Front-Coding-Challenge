import { combineReducers } from 'redux';
import userReducer from './UserInfo/reducer.js';
import orderReducer from './Order/reducer.ts';

const rootReducer = combineReducers({
    user: userReducer,
    order: orderReducer,
   
});

export default rootReducer;
