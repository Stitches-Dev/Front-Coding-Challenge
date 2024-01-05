import { combineReducers } from 'redux';
import userReducer from './Examinee/reducer.js';
import orderReducer from './Test/reducer.ts';
import examineeReducer from './Examinee/reducer.js';

const rootReducer = combineReducers({
    test: testReducer,
    examinee: examineeReducer,
   
});

export default rootReducer;
