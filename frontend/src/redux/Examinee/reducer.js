import { SET_PAYLOAD, CLEAR_PAYLOAD, SET_EXAMINEE_ID, CLEAR_EXAMINEE_ID } from './actionTypes.js'; // Adjust the import path

const initialState = {
  examinee_id: ''
};

const examineeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXAMINEE_ID:
      return {
        ...state,
        examinee_id: action.payload,
      };
    case CLEAR_EXAMINEE_ID:
      return {
        ...state,
        examinee_id: '',
      };
    default:
      return state;
  }
};

export default examineeReducer;
