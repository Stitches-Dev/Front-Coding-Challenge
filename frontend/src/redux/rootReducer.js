import { combineReducers } from 'redux';
import examineeReducer from './Examinee/reducer.js';
import testReducer from './Test/reducer.js';

const rootReducer = combineReducers({
    test: testReducer,
    examinee: examineeReducer,
   
});

export default rootReducer;
