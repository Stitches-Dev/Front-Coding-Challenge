// action.js
import { CLEAR_PAYLOAD, SET_PAYLOAD } from "./actionTypes";

export const setPayload = (payload) => ({
  type: SET_PAYLOAD,
  payload: payload,
});
export const clearPayload = () => ({
  type: CLEAR_PAYLOAD,
});
