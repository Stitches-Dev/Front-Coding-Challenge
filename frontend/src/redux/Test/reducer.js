import { SET_TEST_ID, CLEAR_TEST_ID } from './actionTypes.js'; // Adjust the import path

const initialState = {
  test_id: ''
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST_ID:
      return {
        ...state,
        test_id: action.payload,
      };
    case CLEAR_TEST_ID:
      return {
        ...state,
        test_id: '',
      };
    default:
      return state;
  }
};

export default testReducer;
