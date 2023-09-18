import axios from "axios";
// action name constants

export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const incBonus = "bonus/increment";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulfilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";

// Action creators
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

export function getAccountUserPending() {
  return { type: getAccUserPending };
}

export function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value };
}

export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error };
}

export function increment() {
  return { type: inc };
}

export function decrement() {
  return { type: dec };
}

export function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

export function incrementBonus() {
  return { type: incBonus };
}
