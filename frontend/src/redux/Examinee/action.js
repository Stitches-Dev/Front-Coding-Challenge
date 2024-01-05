// action.js
import { CLEAR_EXAMINEE_ID, CLEAR_PAYLOAD, SET_EXAMINEE_ID, SET_PAYLOAD } from "./actionTypes";

export const setExamineeId = (examinee_id) => ({
  type: SET_EXAMINEE_ID,
  payload: examinee_id,
});
export const clearPayload = () => ({
  type: CLEAR_EXAMINEE_ID,
});
