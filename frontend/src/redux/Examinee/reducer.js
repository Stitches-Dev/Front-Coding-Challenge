import { SET_PAYLOAD, CLEAR_PAYLOAD } from './actionTypes.js'; // Adjust the import path

const initialState = {
  payload: ''
};

const examineeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYLOAD:
      return {
        ...state,
        payload: action.payload,
      };
    case CLEAR_PAYLOAD:
      return {
        ...state,
        payload: '',
      };
    default:
      return state;
  }
};

export default examineeReducer;
