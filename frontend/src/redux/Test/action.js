// action.js
import { CLEAR_PAYLOAD, CLEAR_TEST_ID, SET_TEST_ID } from "./actionTypes";

export const setTestId = (test_id) => ({
  type: SET_TEST_ID,
  payload: test_id,
});
export const clearPayload = () => ({
  type: CLEAR_TEST_ID,
});
